(() => {
    if (!document.querySelector('[data-editor]') || !window.Quill) return;
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
        FormElements.editor(target, {
            labelledBy: variant + '-title',
            theme: bubble ? 'bubble' : 'snow',
            bounds: frame,
            placeholder: 'Type something…',
            modules: {
                toolbar: variant === 'full' ? full : standard,
                syntax: !bubble && Boolean(window.hljs)
            }
        });
    });
})();

(() => {
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
        FormElements.calendar(input, options);
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
        FormElements.dateRange(input[0], options);
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
        timeOptions.forEach((options, index) => FormElements.timePicker(document.getElementById('pk-time-' + index), options));
    }

    const swatches = ['#8c57ff', '#56ca00', '#ff4c51', '#ffb400', '#16b1ff'];
    document.querySelectorAll('.pk-color').forEach((field, index) => {
        const output = field.querySelector('output');
        if (!window.Pickr || !output || !field.querySelector('.pk-swatch')) return;
        const theme = field.dataset.theme;
        output.textContent = swatches[{ classic: 0, monolith: 1, nano: 2 }[theme] ?? index % swatches.length].toUpperCase();
        const picker = FormElements.colorPicker(field.querySelector('.pk-swatch'), {
            theme,
            default: swatches[{ classic: 0, monolith: 1, nano: 2 }[theme] ?? index % swatches.length],
            swatches,
            components: {
                preview: true, opacity: true, hue: true,
                interaction: { hex: true, rgba: true, hsla: true, hsva: true, cmyk: true, input: true, clear: true, save: true }
            }
        });
        picker.getRoot().button.setAttribute('aria-label', 'Choose ' + theme + ' color');
        picker.on('save', color => {
            output.textContent = color ? color.toHEXA().toString() : 'No color';
            picker.hide();
        });
    });
})();

(() => {
    const $ = window.jQuery;
    const cities = ['Bangkok', 'Hanoi', 'Singapore', 'Tokyo', 'Seoul', 'Osaka'];
    const otherCities = ['Taipei', 'Hong Kong', 'Kuala Lumpur', 'Jakarta', 'Manila', 'Phnom Penh'];
    const tags = ['Design', 'Development', 'Research', 'Marketing', 'Support', 'Operations'];

    document.querySelectorAll('[data-select-demo]').forEach(input => {
        FormElements.select(input, { placeholder: 'Select a city', icons: input.hasAttribute('data-icons') });
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
        FormElements.tags(input, tagOptions[Number(input.dataset.tags)]);
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
            FormElements.typeahead(this, { hint: true, highlight: true, minLength: index === 3 ? 0 : 1 }, ...datasets[index]);
        });

    }
    document.querySelectorAll('[data-bootstrap-select]').forEach(input => {
        FormElements.bootstrapSelect(input, { noneSelectedText: 'Select a city' });
    });
})();

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
        FormElements.slider(track, { range: percentageRange, step: 1, format: integer, ...config }, label);
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

FormElements.repeater({
    rows: document.getElementById('fx-rows'),
    template: document.getElementById('fx-row-template'),
    addButton: document.getElementById('fx-add'),
    status: document.getElementById('fx-status')
});
