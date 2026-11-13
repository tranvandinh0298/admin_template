/* Reusable form control adapters. Supply the target and its configuration. */
window.FormElements = (() => {
    const $ = window.jQuery;

    function editor(target, options = {}) {
        if (!target || !window.Quill) return;
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
        const { label, labelledBy, ...config } = options;
        const editor = new Quill(target, config);
        editor.root.setAttribute('role', 'textbox');
        editor.root.setAttribute('aria-multiline', 'true');
        if (labelledBy) editor.root.setAttribute('aria-labelledby', labelledBy);
        else if (label) editor.root.setAttribute('aria-label', label);
        const toolbar = editor.getModule('toolbar')?.container;
        if (!toolbar) return editor;
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
        return editor;
    }

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


    function calendar(input, options = {}) {
        if (!input || !window.flatpickr) return;
        const labels = Array.from(input.labels || []);
        const picker = flatpickr(input, { disableMobile: true, position: positionCalendar, ...options });
        picker.calendarContainer.classList.add('pk-popup');
        if (picker.altInput && input.id) {
            picker.altInput.id = input.id + '-display';
            labels.forEach(label => { label.htmlFor = picker.altInput.id; });
        }
        return picker;
    }

    function dateRange(input, options = {}) {
        if (!input || !$?.fn.daterangepicker) return;
        const field = $(input).daterangepicker({ opens: 'center', drops: 'auto', ...options });
        const picker = field.data('daterangepicker');
        picker.container.addClass('pk-popup');
        field.on('keydown', event => {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                picker.show();
            }
        });
        return picker;
    }

    function timePicker(input, options = {}) {
        if (!input || !$?.fn.timepicker) return;
        return $(input).timepicker({ className: 'pk-popup', ...options });
    }

    function colorPicker(input, options = {}) {
        if (!input || !window.Pickr) return;
        const picker = Pickr.create({ ...options, el: input });
        picker.getRoot().app.classList.add('pk-popup');
        return picker;
    }

    function optionWithIcon(option) {
        const icon = option.element?.dataset.icon;
        if (!icon) return option.text;
        return $('<span>').append($('<i>', { class: icon, 'aria-hidden': 'true' }), document.createTextNode(' ' + option.text));
    }


    function select(input, options = {}) {
        if (!input || !$?.fn.select2) return;
        const { icons, ...config } = options;
        const field = $(input).parent();
        const result = $(input).select2({
            width: '100%', dropdownParent: field,
            ...(icons ? { templateResult: optionWithIcon, templateSelection: optionWithIcon } : {}),
            ...config
        });
        if (input.labels?.[0]?.id) field.find('.select2-selection').attr('aria-labelledby', input.labels[0].id);
        return result;
    }

    function tags(input, options = {}) {
        if (!input || !window.Tagify) return;
        const instance = new Tagify(input, { ...options, dropdown: { classname: 'sel-tag-dropdown', ...options.dropdown } });
        if (input.labels?.[0]?.id) instance.DOM.input.setAttribute('aria-labelledby', input.labels[0].id);
        return instance;
    }

    function typeahead(input, options, ...datasets) {
        if (!input || !$?.fn.typeahead) return;
        return $(input).typeahead(options, ...datasets);
    }

    function bootstrapSelect(input, options = {}) {
        if (!input || !$?.fn.selectpicker) return;
        $.fn.selectpicker.Constructor.BootstrapVersion = '5';
        const result = $(input).selectpicker({ width: '100%', ...options });
        if (input.labels?.[0]?.id) $(input).parent().find('button.dropdown-toggle').attr('aria-labelledby', input.labels[0].id);
        return result;
    }

    function slider(track, options, label) {
        if (!track || !window.noUiSlider) return;
        const starts = Array.isArray(options.start) ? options.start : [options.start];
        const handleAttributes = label && starts.map((_, index) => ({
            'aria-label': starts.length === 1 ? label : label + (index ? ' upper value' : ' lower value'),
            'aria-orientation': options.orientation || 'horizontal'
        }));
        return noUiSlider.create(track, { ...(handleAttributes ? { handleAttributes } : {}), ...options });
    }

    function repeater({ rows, template, addButton, status }) {
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
    }

    return Object.freeze({ editor, calendar, dateRange, timePicker, colorPicker, select, tags,
        typeahead, bootstrapSelect, slider, repeater });
})();

document.querySelectorAll('input[type="checkbox"][data-mixed]').forEach(checkbox => {
    checkbox.indeterminate = true;
});

(() => {
    const page = document;
    const status = document.querySelector('.ig-status');
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

document.querySelectorAll('[data-upload]').forEach(section => {
    const picker = section.querySelector('input[type="file"]');
    const dropzone = section.querySelector('.fu-drop');
    const list = section.querySelector('.fu-files');
    const status = section.querySelector('.fu-status');
    if (!picker || !dropzone || !list || !status) return;
    const maxMiB = Number(section.dataset.maxMib) || Infinity;
    const entries = [];
    let dragDepth = 0;

    function release(entry) {
        if (entry.url) URL.revokeObjectURL(entry.url);
    }

    function addFiles(files) {
        const messages = [];
        let added = 0;
        for (const file of files) {
            if (file.size > maxMiB * 1024 * 1024) {
                messages.push(file.name + ' exceeds ' + maxMiB + ' MiB.');
                continue;
            }
            if (entries.some(entry => entry.file.name === file.name &&
                entry.file.size === file.size && entry.file.lastModified === file.lastModified)) {
                messages.push(file.name + ' is already selected.');
                continue;
            }
            if (!picker.multiple && entries.length) {
                messages.push('This field accepts one file. Remove the current file to choose another.');
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

(() => {
    document.querySelectorAll('textarea[data-autosize]').forEach(textarea => {
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
    });

    if (window.cleaveZen && document.querySelector('[data-mask]')) {
        const { formatCreditCard, getCreditCardType, formatDate, formatTime, formatNumeral,
            formatGeneral, registerCursorTracker } = cleaveZen;
        const digits = value => value.replace(/\D/g, '');
        const general = (blocks, delimiter = ' ') => value =>
            formatGeneral(digits(value), { blocks, delimiter });
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
            prefix: [formatGeneral, ' ']
        };
        document.querySelectorAll('[data-mask]').forEach(input => {
            if (!Object.hasOwn(masks, input.dataset.mask)) return;
            const [format, separators] = masks[input.dataset.mask];
            const prefix = input.dataset.maskPrefix || '';
            const cardKind = document.getElementById(input.dataset.maskOutput || '');
            if (input.dataset.mask === 'prefix') input.value = prefix;
            input.addEventListener('input', event => {
                if (event.isComposing) return;
                input.value = input.dataset.mask === 'prefix'
                    ? format(input.value, { prefix, blocks: [3, 3, 3, 4], delimiter: ' ' })
                    : format(input.value);
                if (input.dataset.mask === 'card' && cardKind) {
                    const kind = getCreditCardType(digits(input.value));
                    cardKind.textContent = kind && !['unknown', 'general'].includes(kind)
                        ? 'Detected card type: ' + kind + ''
                        : '';
                }
            });
            registerCursorTracker({
                input,
                ...(Array.isArray(separators) ? { delimiters: separators } : { delimiter: separators })
            });
        });

    }

    document.querySelectorAll('[data-count-output]').forEach(input => {
        const output = document.getElementById(input.dataset.countOutput);
        if (!output) return;
        const update = () => { output.textContent = input.value.length + ' / ' + input.maxLength; };
        input.addEventListener('input', update);
        update();
    });

})();
