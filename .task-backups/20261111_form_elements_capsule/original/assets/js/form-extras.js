(() => {
    const textarea = document.getElementById('fx-autosize');
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
        const [format, separators] = masks[input.dataset.mask];
        if (input.dataset.mask === 'prefix') input.value = prefix;
        input.addEventListener('input', event => {
            if (event.isComposing) return;
            input.value = format(input.value);
            if (input.dataset.mask === 'card') {
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

    for (const id of ['fx-count-input', 'fx-count-textarea']) {
        const input = document.getElementById(id);
        const output = document.getElementById(id + '-output');
        const update = () => { output.textContent = input.value.length + ' / ' + input.maxLength; };
        input.addEventListener('input', update);
        update();
    }

    const rows = document.getElementById('fx-rows');
    const template = document.getElementById('fx-row-template');
    const addButton = document.getElementById('fx-add');
    const status = document.getElementById('fx-status');
    let nextRow = 1;
    function addRow(focus = true) {
        const row = template.content.firstElementChild.cloneNode(true);
        const number = nextRow++;
        row.querySelector('legend').textContent = 'Entry ' + number;
        const remove = row.querySelector('.fx-delete');
        remove.setAttribute('aria-label', 'Delete entry ' + number);
        remove.addEventListener('click', async () => {
            const result = await Swal.fire({
                title: 'Delete entry ' + number + '?',
                text: 'The values in this row will be removed.',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Delete',
                confirmButtonColor: '#bf3040',
                focusCancel: true,
                returnFocus: false
            });
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
