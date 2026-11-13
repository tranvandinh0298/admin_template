/* basic-inputs */
document.querySelectorAll('input[type="checkbox"][data-mixed]').forEach(checkbox => {
    checkbox.indeterminate = true;
});

/* input-groups */
(() => {
    const page = document.querySelector('.input-groups-page') || document;
    const status = document.getElementById('ig-status');
    if (!page.querySelector('.ig-row')) return;
    let recognition;
    let statusTimer;
    function announce(message) {
        if (!status) return;
        clearTimeout(statusTimer);
        status.textContent = message;
        statusTimer = setTimeout(() => { status.textContent = ''; }, 6000);
    }
    function closeDropdowns(except) {
        page.querySelectorAll('.ig-dropdown[open]').forEach(dropdown => {
            if (dropdown !== except) dropdown.open = false;
        });
    }
    page.addEventListener('click', event => {
        const dropdown = event.target.closest('.ig-dropdown');
        closeDropdowns(dropdown);
        if (!event.target.closest('.ig-row')) return;
        const button = event.target.closest('button');
        if (!button) return;
        const input = button.closest('.ig-row')?.querySelector('.bi-control');
        if (button.hasAttribute('data-password')) {
            const visible = input.type === 'password';
            input.type = visible ? 'text' : 'password';
            button.setAttribute('aria-pressed', String(visible));
            button.setAttribute('aria-label', visible ? 'Hide password' : 'Show password');
            button.querySelector('i').classList.toggle('fa-eye-slash', visible);
            button.querySelector('i').classList.toggle('fa-eye', !visible);
        }
        if (button.hasAttribute('data-option')) {
            dropdown.open = false;
            dropdown.querySelector('summary').focus();
            announce(button.textContent + ' selected.');
        }
        if (button.hasAttribute('data-action')) announce(button.textContent + ' selected.');
        if (button.hasAttribute('data-speech')) dictate(input, button);
    });
    page.addEventListener('keydown', event => {
        if (event.key !== 'Escape') return;
        const open = page.querySelector('.ig-dropdown[open]');
        if (!open) return;
        open.open = false;
        open.querySelector('summary').focus();
        event.preventDefault();
    });
    function dictate(input, button) {
        const Speech = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (!Speech) { announce('Dictation is unavailable. Type in the field instead.'); return; }
        if (recognition) return;
        const session = new Speech();
        recognition = session;
        session.lang = document.documentElement.lang;
        function finish() {
            if (recognition !== session) return;
            recognition = undefined;
            button.removeAttribute('aria-busy');
        }
        session.onresult = event => {
            input.value = event.results[0][0].transcript;
            input.dispatchEvent(new Event('input', { bubbles: true }));
            announce('Dictation added.');
        };
        session.onerror = () => { finish(); announce('Dictation failed. You can type in the field.'); };
        session.onend = finish;
        try {
            session.start();
            button.setAttribute('aria-busy', 'true');
            announce('Listening…');
        } catch {
            finish();
            announce('Unable to start dictation. You can type in the field.');
        }
    }
})();

/* editors */
(() => {
    if (!document.querySelector('[data-editor]') || !window.Quill) return;
    const icons = Quill.import('ui/icons');
    const iconNames = {
        bold: 'bold', italic: 'italic', underline: 'underline', strike: 'strikethrough',
        blockquote: 'quote-right', 'code-block': 'code', link: 'link', image: 'image',
        video: 'video', formula: 'square-root-variable', clean: 'eraser',
        color: 'font', background: 'fill-drip', header: 'heading',
        script: 'superscript', list: 'list', indent: 'indent', direction: 'arrow-right-arrow-left',
        align: 'align-left'
    };
    Object.entries(iconNames).forEach(([format, name]) => {
        const markup = '<i class="fa-solid fa-' + name + '" aria-hidden="true"></i>';
        if (typeof icons[format] === 'object') {
            Object.keys(icons[format]).forEach(value => { icons[format][value] = markup; });
        } else {
            icons[format] = markup;
        }
    });
    const standard = [
        [{ font: [] }, { size: [] }],
        ['bold', 'italic', 'underline', 'strike'],
        [{ color: [] }, { background: [] }],
        [{ script: 'super' }, { script: 'sub' }],
        [{ header: 1 }, { header: 2 }, 'blockquote', 'code-block']
    ];
    const full = [
        ...standard,
        [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
        [{ direction: 'rtl' }, { align: [] }],
        ['link', 'image', 'video', 'formula'],
        ['clean']
    ];
    document.querySelectorAll('[data-editor]').forEach(frame => {
        const variant = frame.dataset.editor;
        const target = frame.querySelector('[id$="-editor"]');
        if (!target) return;
        const bubble = variant === 'bubble';
        const editor = new Quill(target, {
            theme: bubble ? 'bubble' : 'snow',
            bounds: frame,
            placeholder: 'Type something…',
            modules: {
                toolbar: variant === 'full' ? full : standard,
                syntax: !bubble && Boolean(window.hljs)
            }
        });
        editor.root.setAttribute('role', 'textbox');
        editor.root.setAttribute('aria-multiline', 'true');
        editor.root.setAttribute('aria-labelledby', variant + '-title');
        const toolbar = editor.getModule('toolbar').container;
        toolbar.setAttribute('role', 'group');
        toolbar.setAttribute('aria-label', 'Formatting controls');
        toolbar.querySelectorAll('button').forEach(button => {
            const format = [...button.classList].find(name => name.startsWith('ql-'))?.slice(3);
            if (!format) return;
            const label = [format.replaceAll('-', ' '), button.value].filter(Boolean).join(' ');
            button.setAttribute('aria-label', label);
            button.title = label;
        });
        toolbar.querySelectorAll('.ql-picker-label').forEach(label => {
            const type = [...label.parentElement.classList].find(name => /^ql-(font|size|color|background|align)$/.test(name));
            if (type) label.setAttribute('aria-label', type.slice(3));
        });
    });
})();

/* file-upload */
document.querySelectorAll('[data-upload]').forEach(section => {
    const picker = section.querySelector('input[type="file"]');
    const dropzone = section.querySelector('.fu-drop');
    const list = section.querySelector('.fu-files');
    const status = section.querySelector('.fu-status');
    if (!picker || !dropzone || !list || !status) return;
    const entries = [];
    let dragDepth = 0;

    function release(entry) {
        if (entry.url) URL.revokeObjectURL(entry.url);
    }

    function addFiles(files) {
        const messages = [];
        let added = 0;
        for (const file of files) {
            if (file.size > 5 * 1024 * 1024) {
                messages.push(file.name + ' exceeds 5 MiB.');
                continue;
            }
            if (entries.some(entry => entry.file.name === file.name &&
                entry.file.size === file.size && entry.file.lastModified === file.lastModified)) {
                messages.push(file.name + ' is already selected.');
                continue;
            }
            if (section.dataset.upload === 'basic' && entries.length) {
                messages.push('Basic accepts one file. Remove the current file to choose another.');
                continue;
            }
            const entry = { file };
            entries.push(entry);
            const item = document.createElement('li');
            item.className = 'fu-file';
            const placeholder = document.createElement('span');
            placeholder.className = 'fu-placeholder';
            placeholder.textContent = 'File';
            item.append(placeholder);
            if (/^image\/(png|jpeg|gif|webp|avif|bmp)$/.test(file.type)) {
                entry.url = URL.createObjectURL(file);
                const image = new Image();
                image.alt = '';
                image.onload = () => {
                    if (entries.includes(entry)) placeholder.replaceWith(image);
                };
                image.onerror = () => {
                    release(entry);
                    entry.url = undefined;
                    placeholder.textContent = 'Preview unavailable';
                };
                image.src = entry.url;
            }
            const name = document.createElement('strong');
            name.textContent = file.name;
            const size = document.createElement('small');
            size.textContent = new Intl.NumberFormat().format(file.size) + ' bytes';
            const remove = document.createElement('button');
            remove.type = 'button';
            remove.textContent = 'Remove';
            remove.setAttribute('aria-label', 'Remove ' + file.name);
            remove.addEventListener('click', () => {
                release(entry);
                entries.splice(entries.indexOf(entry), 1);
                item.remove();
                status.textContent = file.name + ' removed. ' + entries.length + ' selected.';
                picker.focus();
            });
            item.append(name, size, remove);
            list.append(item);
            added++;
        }
        status.textContent = [added ? added + ' file(s) added.' : '', ...messages,
            entries.length + ' selected.'].filter(Boolean).join(' ');
        picker.value = '';
    }

    picker.addEventListener('change', () => addFiles(picker.files));
    dropzone.addEventListener('dragenter', event => {
        event.preventDefault();
        dragDepth++;
        dropzone.classList.add('fu-dragover');
    });
    dropzone.addEventListener('dragover', event => event.preventDefault());
    dropzone.addEventListener('dragleave', () => {
        dragDepth--;
        if (dragDepth <= 0) dropzone.classList.remove('fu-dragover');
    });
    dropzone.addEventListener('drop', event => {
        event.preventDefault();
        dragDepth = 0;
        dropzone.classList.remove('fu-dragover');
        addFiles(event.dataTransfer.files);
    });
    window.addEventListener('pagehide', event => {
        if (!event.persisted) entries.forEach(release);
    });
});

/* pickers */
(() => {
    function positionCalendar(instance, anchor = instance.altInput || instance.input) {
        const calendar = instance.calendarContainer;
        const field = anchor.getBoundingClientRect();
        const width = document.documentElement.clientWidth;
        const left = Math.max(6, Math.min(field.left, width - calendar.offsetWidth - 6));
        const above = field.bottom + calendar.offsetHeight > window.innerHeight &&
            field.top >= calendar.offsetHeight + 3;
        calendar.classList.toggle('arrowTop', !above);
        calendar.classList.toggle('arrowBottom', above);
        calendar.style.left = left + window.scrollX + 'px';
        calendar.style.top = (above ? field.top - calendar.offsetHeight - 3 : field.bottom + 3) + window.scrollY + 'px';
    }

    if (!document.querySelector('[id^="pk-flat-"], [id^="pk-range-"], [id^="pk-time-"], .pk-color')) return;
    const today = window.moment?.().startOf('day');
    const disabledDates = [new Date(), new Date()];
    disabledDates[0].setDate(disabledDates[0].getDate() - 2);
    disabledDates[1].setDate(disabledDates[1].getDate() + 2);
    const calendarOptions = [
        { monthSelectorType: 'static' },
        { enableTime: true, noCalendar: true, dateFormat: 'h:i K' },
        { enableTime: true, dateFormat: 'Y-m-d H:i' },
        { mode: 'multiple', minDate: 'today', weekNumbers: true, enableTime: true, dateFormat: 'Y-m-d H:i' },
        { mode: 'range' },
        { altInput: true, altFormat: 'F j, Y' },
        { disable: [{ from: disabledDates[0], to: disabledDates[1] }] },
        { inline: true, monthSelectorType: 'static' }
    ];
    calendarOptions.forEach((options, index) => {
        const id = 'pk-flat-' + index;
        const input = document.getElementById(id);
        if (!input || !window.flatpickr) return;
        const instance = flatpickr(input, { disableMobile: true, position: positionCalendar, ...options });
        instance.calendarContainer.classList.add('pk-popup');
        if (instance.altInput) {
            instance.altInput.id = id + '-display';
            document.querySelector('label[for="' + id + '"]')?.setAttribute('for', instance.altInput.id);
        }
    });

    const $ = window.jQuery;
    const rangeOptions = today && $?.fn.daterangepicker ? [
        {},
        { singleDatePicker: true },
        { timePicker: true, timePickerIncrement: 30, locale: { format: 'MM/DD/YYYY h:mm A' } },
        { ranges: {
            Today: [today.clone(), today.clone()],
            Yesterday: [today.clone().subtract(1, 'day'), today.clone().subtract(1, 'day')],
            'Last 7 Days': [today.clone().subtract(6, 'days'), today.clone()],
            'Last 30 Days': [today.clone().subtract(29, 'days'), today.clone()],
            'This Month': [today.clone().startOf('month'), today.clone().endOf('month')],
            'Last Month': [today.clone().subtract(1, 'month').startOf('month'), today.clone().subtract(1, 'month').endOf('month')]
        } },
        { showWeekNumbers: true },
        { showDropdowns: true }
    ] : null;
    rangeOptions?.forEach((options, index) => {
        const input = $('#pk-range-' + index);
        if (!input.length) return;
        input.daterangepicker({ opens: 'center', drops: 'auto', ...options });
        const picker = input.data('daterangepicker');
        picker.container.addClass('pk-popup');
        input.on('keydown', event => {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                picker.show();
            }
        });
    });

    const timeOptions = [
        {},
        { minTime: '2:00pm', maxTime: '7:00pm', showDuration: true },
        { disableTimeRanges: [['12am', '3am'], ['4am', '4:30am']] },
        { timeFormat: 'H:i:s' },
        { step: 15 },
        { show2400: true, timeFormat: 'H:i:s' }
    ];
    if ($?.fn.timepicker) {
        timeOptions.forEach((options, index) => $('#pk-time-' + index).timepicker({ className: 'pk-popup', ...options }));
    }

    const swatches = ['#8c57ff', '#56ca00', '#ff4c51', '#ffb400', '#16b1ff'];
    document.querySelectorAll('.pk-color').forEach((field, index) => {
        const output = field.querySelector('output');
        if (!window.Pickr || !output || !field.querySelector('.pk-swatch')) return;
        const theme = field.dataset.theme;
        output.textContent = swatches[{ classic: 0, monolith: 1, nano: 2 }[theme] ?? index % swatches.length].toUpperCase();
        const picker = Pickr.create({
            el: field.querySelector('.pk-swatch'),
            theme,
            default: swatches[{ classic: 0, monolith: 1, nano: 2 }[theme] ?? index % swatches.length],
            swatches,
            components: {
                preview: true, opacity: true, hue: true,
                interaction: { hex: true, rgba: true, hsla: true, hsva: true, cmyk: true, input: true, clear: true, save: true }
            }
        });
        picker.getRoot().app.classList.add('pk-popup');
        picker.getRoot().button.setAttribute('aria-label', 'Choose ' + theme + ' color');
        picker.on('save', color => {
            output.textContent = color ? color.toHEXA().toString() : 'No color';
            picker.hide();
        });
    });
})();

/* selects */
(() => {
    const $ = window.jQuery;
    const cities = ['Bangkok', 'Hanoi', 'Singapore', 'Tokyo', 'Seoul', 'Osaka'];
    const otherCities = ['Taipei', 'Hong Kong', 'Kuala Lumpur', 'Jakarta', 'Manila', 'Phnom Penh'];
    const tags = ['Design', 'Development', 'Research', 'Marketing', 'Support', 'Operations'];

    function optionWithIcon(option) {
        const icon = option.element?.dataset.icon;
        if (!icon) return option.text;
        return $('<span>').append($('<i>', { class: icon, 'aria-hidden': 'true' }), document.createTextNode(' ' + option.text));
    }

    if ($?.fn.select2) $('[data-select-demo]').each(function () {
        const field = $(this).parent();
        const options = { width: '100%', dropdownParent: field, placeholder: 'Select a city' };
        if (this.hasAttribute('data-icons')) {
            options.templateResult = optionWithIcon;
            options.templateSelection = optionWithIcon;
        }
        $(this).select2(options);
        field.find('.select2-selection').attr('aria-labelledby', this.id + '-label');
    });

    const tagOptions = [
        {},
        {},
        { whitelist: tags, dropdown: { enabled: 0, position: 'text' } },
        { whitelist: tags, dropdown: { enabled: 0, closeOnSelect: false } },
        { whitelist: ['Alex Rivera', 'Jamie Chen', 'Morgan Lee'], enforceWhitelist: true, dropdown: { enabled: 0 } },
        { pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, whitelist: ['alex@example.com', 'jamie@example.com'], dropdown: { enabled: 0 } }
    ];
    document.querySelectorAll('[data-tags]').forEach(input => {
        if (!window.Tagify) return;
        const options = tagOptions[Number(input.dataset.tags)] || {};
        const tagify = new Tagify(input, { ...options, dropdown: { ...options.dropdown, classname: 'sel-tag-dropdown' } });
        tagify.DOM.input.setAttribute('aria-labelledby', input.id + '-label');
    });

    if ($?.fn.typeahead && window.Bloodhound && document.querySelector('[data-type]')) {
        const startsWith = values => (query, sync) => sync(values.filter(city =>
            city.toLowerCase().includes(query.trim().toLowerCase())));
        const engine = new Bloodhound({
            datumTokenizer: Bloodhound.tokenizers.whitespace,
            queryTokenizer: Bloodhound.tokenizers.whitespace,
            local: cities
        });
        const prefetch = new Bloodhound({
            datumTokenizer: Bloodhound.tokenizers.whitespace,
            queryTokenizer: Bloodhound.tokenizers.whitespace,
            local: otherCities,
            ...(location.protocol === 'file:' ? {} : {
                prefetch: { url: 'assets/json/selects-prefetch.json', cache: false }
            })
        });
        const datasets = [
            [{ source: startsWith(cities) }],
            [{ source: engine }],
            [{ source: prefetch }],
            [{ source: startsWith(cities), limit: 4 }],
            [{ source: startsWith(cities), templates: {
                suggestion: city => $('<div>').append($('<strong>').text(city), $('<small>').text('City')).get(0)
            } }],
            [
                { name: 'featured', source: startsWith(cities), templates: { header: '<div class="sel-dataset-title">Featured cities</div>' } },
                { name: 'more', source: startsWith(otherCities), templates: { header: '<div class="sel-dataset-title">More cities</div>' } }
            ]
        ];
        $('[data-type]').each(function () {
            const index = Number(this.dataset.type);
            $(this).typeahead({ hint: true, highlight: true, minLength: index === 3 ? 0 : 1 }, ...datasets[index]);
        });

    }
    if (!$?.fn.selectpicker || !document.querySelector('[data-bootstrap-select]')) return;
    $.fn.selectpicker.Constructor.BootstrapVersion = '5';
    $('[data-bootstrap-select]').selectpicker({ width: '100%', noneSelectedText: 'Select a city' });
    $('[data-bootstrap-select]').each(function () {
        $(this).parent().find('button.dropdown-toggle').attr('aria-labelledby', this.id + '-label');
    });
})();

/* sliders */
(() => {
    if (!window.noUiSlider || !document.querySelector('.sl-track')) return;
    const percentageRange = { min: 0, max: 100 };
    const dragRange = { min: 20, max: 80 };
    const integer = { to: value => String(Math.round(value)), from: Number };
    const pips = { mode: 'values', values: [0, 20, 40, 60, 80, 100], density: 5, format: integer };
    const color = { start: [30, 50], connect: true, step: 10, behaviour: 'tap-drag', tooltips: true, pips };
    const vertical = { orientation: 'vertical', behaviour: 'drag' };
    const configs = {
        basic: { start: [50], connect: 'lower' },
        handles: { start: [0, 50], step: 5, connect: true, pips },
        steps: { start: [0, 30], snap: true, connect: true,
            range: { min: 0, '10%': 10, '20%': 20, '30%': 30, '40%': 40, '50%': 50, max: 100 } },
        tap: { start: [10, 30], connect: true, range: { min: 10, max: 100 } },
        drag: { start: [40, 60], connect: true, range: dragRange, limit: 20, behaviour: 'drag' },
        fixed: { start: [40, 60], connect: true, range: dragRange, behaviour: 'drag-fixed' },
        combined: { start: [40, 60], connect: true, range: dragRange, behaviour: 'drag-tap' },
        hover: { start: [20], behaviour: 'hover-snap-tap' },
        scale: { start: [10], step: 10, behaviour: 'tap-drag', tooltips: true, pips },
        primary: color, success: color, danger: color, info: color, warning: color,
        dynamic: { start: [10, 30], step: 1, connect: true, range: { min: -20, max: 40 } },
        'vertical-0': { ...vertical, start: [40, 60], connect: true },
        'vertical-1': { ...vertical, start: [40], connect: 'upper' },
        'vertical-2': { ...vertical, start: [10], tooltips: true },
        'vertical-3': { ...vertical, start: [0, 40], connect: true, limit: 60, tooltips: true }
    };

    for (const [key, config] of Object.entries(configs)) {
        const track = document.getElementById('sl-' + key);
        if (!track) continue;
        const label = document.getElementById(track.id + '-label')?.textContent || key;
        const handleAttributes = config.start.map((_, index) => ({
            'aria-label': config.start.length === 1 ? label : label + (index ? ' upper value' : ' lower value'),
            'aria-orientation': config.orientation || 'horizontal'
        }));
        noUiSlider.create(track, { range: percentageRange, step: 1, format: integer, handleAttributes, ...config });
    }

    const hoverOutput = document.getElementById('sl-hover-value');
    const hover = document.getElementById('sl-hover')?.noUiSlider;
    if (hoverOutput) hover?.on('update', ([value]) => { hoverOutput.textContent = value; });
    if (hoverOutput) hover?.on('hover', value => { hoverOutput.textContent = integer.to(value); });

    const low = document.getElementById('sl-low');
    const high = document.getElementById('sl-high');
    const dynamic = document.getElementById('sl-dynamic')?.noUiSlider;
    if (!dynamic || !low || !high) return;
    for (let value = -20; value <= 40; value++) low.add(new Option(value, value));
    dynamic.on('update', ([lower, upper]) => {
        low.value = lower;
        high.value = upper;
    });
    low.addEventListener('change', () => dynamic.set([low.value, null]));
    high.addEventListener('change', () => {
        if (high.value === '' || !Number.isFinite(high.valueAsNumber)) {
            high.value = dynamic.get()[1];
            return;
        }
        dynamic.set([null, high.valueAsNumber]);
    });
})();

/* form-extras */
(() => {
    const textarea = document.getElementById('fx-autosize');
    if (textarea) {
        function resizeMessage() {
            const border = textarea.offsetHeight - textarea.clientHeight;
            textarea.style.height = 'auto';
            textarea.style.height = textarea.scrollHeight + border + 'px';
        }
        textarea.addEventListener('input', resizeMessage);
        let lastWidth = 0;
        new ResizeObserver(([entry]) => {
            if (entry.contentRect.width === lastWidth) return;
            lastWidth = entry.contentRect.width;
            resizeMessage();
        }).observe(textarea);
        resizeMessage();
    }

    if (window.cleaveZen && document.querySelector('[data-mask]')) {
        const { formatCreditCard, getCreditCardType, formatDate, formatTime, formatNumeral,
            formatGeneral, registerCursorTracker } = cleaveZen;
        const digits = value => value.replace(/\D/g, '');
        const general = (blocks, delimiter = ' ') => value =>
            formatGeneral(digits(value), { blocks, delimiter });
        const prefix = '+63';
        const masks = {
            card: [formatCreditCard, ' '],
            phone: [general([3, 3, 4]), ' '],
            date: [value => formatDate(value, { delimiter: '-', datePattern: ['Y', 'm', 'd'] }), '-'],
            time: [value => formatTime(value, { timePattern: ['h', 'm', 's'] }), ':'],
            numeral: [value => formatNumeral(value, { numeralThousandsGroupStyle: 'thousand' }), ','],
            blocks: [general([4, 3, 3]), ' '],
            delimiter: [general([3, 3, 3], '·'), '·'],
            custom: [value => formatGeneral(value.replace(/[^a-z0-9]/gi, ''), {
                blocks: [3, 3, 3, 2], delimiters: ['.', '.', '-'], uppercase: true
            }), ['.', '-']],
            prefix: [value => formatGeneral(value, { prefix, blocks: [3, 3, 3, 4], delimiter: ' ' }), ' ']
        };
        const cardKind = document.getElementById('fx-card-kind');
        document.querySelectorAll('[data-mask]').forEach(input => {
            if (!Object.hasOwn(masks, input.dataset.mask)) return;
            const [format, separators] = masks[input.dataset.mask];
            if (input.dataset.mask === 'prefix') input.value = prefix;
            input.addEventListener('input', event => {
                if (event.isComposing) return;
                input.value = format(input.value);
                if (input.dataset.mask === 'card' && cardKind) {
                    const kind = getCreditCardType(digits(input.value));
                    cardKind.textContent = kind && !['unknown', 'general'].includes(kind)
                        ? 'Detected card type: ' + kind + '. Use sample numbers.'
                        : 'Use sample numbers.';
                }
            });
            registerCursorTracker({
                input,
                ...(Array.isArray(separators) ? { delimiters: separators } : { delimiter: separators })
            });
        });

    }

    for (const id of ['fx-count-input', 'fx-count-textarea']) {
        const input = document.getElementById(id);
        const output = document.getElementById(id + '-output');
        if (!input || !output) continue;
        const update = () => { output.textContent = input.value.length + ' / ' + input.maxLength; };
        input.addEventListener('input', update);
        update();
    }

    const rows = document.getElementById('fx-rows');
    const template = document.getElementById('fx-row-template');
    const addButton = document.getElementById('fx-add');
    const status = document.getElementById('fx-status');
    if (!rows || !template?.content.firstElementChild || !addButton || !status) return;
    let nextRow = 1;
    function addRow(focus = true) {
        const row = template.content.firstElementChild.cloneNode(true);
        const number = nextRow++;
        row.querySelector('legend').textContent = 'Entry ' + number;
        const remove = row.querySelector('.fx-delete');
        remove.setAttribute('aria-label', 'Delete entry ' + number);
        remove.addEventListener('click', async () => {
            const result = window.Swal ? await Swal.fire({
                title: 'Delete entry ' + number + '?',
                text: 'The values in this row will be removed.',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Delete',
                confirmButtonColor: '#bf3040',
                focusCancel: true,
                returnFocus: false
            }) : { isConfirmed: window.confirm('Delete entry ' + number + '?') };
            if (!result.isConfirmed) {
                remove.focus();
                return;
            }
            const neighbor = row.nextElementSibling || row.previousElementSibling;
            row.remove();
            (neighbor?.querySelector('input') || addButton).focus();
            status.textContent = 'Entry ' + number + ' deleted.';
        });
        rows.append(row);
        if (focus) {
            row.querySelector('input').focus();
            status.textContent = 'Entry ' + number + ' added.';
        }
    }
    addButton.addEventListener('click', () => addRow());
    addRow(false);
})();
