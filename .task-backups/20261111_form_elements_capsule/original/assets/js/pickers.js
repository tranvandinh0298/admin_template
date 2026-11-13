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

    const today = moment().startOf('day');
    const calendarOptions = [
        { monthSelectorType: 'static' },
        { enableTime: true, noCalendar: true, dateFormat: 'h:i K' },
        { enableTime: true, dateFormat: 'Y-m-d H:i' },
        { mode: 'multiple', minDate: 'today', weekNumbers: true, enableTime: true, dateFormat: 'Y-m-d H:i' },
        { mode: 'range' },
        { altInput: true, altFormat: 'F j, Y' },
        { disable: [{ from: today.clone().subtract(2, 'days').toDate(), to: today.clone().add(2, 'days').toDate() }] },
        { inline: true, monthSelectorType: 'static' }
    ];
    calendarOptions.forEach((options, index) => {
        const id = 'pk-flat-' + index;
        const instance = flatpickr('#' + id, { disableMobile: true, position: positionCalendar, ...options });
        if (instance.altInput) {
            instance.altInput.id = id + '-display';
            document.querySelector('label[for="' + id + '"]').htmlFor = instance.altInput.id;
        }
    });

    const rangeOptions = [
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
    ];
    rangeOptions.forEach((options, index) => {
        const input = $('#pk-range-' + index);
        input.daterangepicker({ opens: 'center', drops: 'auto', ...options });
        const picker = input.data('daterangepicker');
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
    timeOptions.forEach((options, index) => $('#pk-time-' + index).timepicker(options));

    const swatches = ['#8c57ff', '#56ca00', '#ff4c51', '#ffb400', '#16b1ff'];
    document.querySelectorAll('.pk-color').forEach((field, index) => {
        const output = field.querySelector('output');
        const theme = field.dataset.theme;
        output.textContent = swatches[index].toUpperCase();
        const picker = Pickr.create({
            el: field.querySelector('.pk-swatch'),
            theme,
            default: swatches[index],
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
