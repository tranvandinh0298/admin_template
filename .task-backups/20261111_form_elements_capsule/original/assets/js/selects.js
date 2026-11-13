(() => {
    const cities = ['Bangkok', 'Hanoi', 'Singapore', 'Tokyo', 'Seoul', 'Osaka'];
    const otherCities = ['Taipei', 'Hong Kong', 'Kuala Lumpur', 'Jakarta', 'Manila', 'Phnom Penh'];
    const tags = ['Design', 'Development', 'Research', 'Marketing', 'Support', 'Operations'];

    function optionWithIcon(option) {
        const icon = option.element?.dataset.icon;
        if (!icon) return option.text;
        return $('<span>').append($('<i>', { class: icon, 'aria-hidden': 'true' }), document.createTextNode(' ' + option.text));
    }

    $('[data-select-demo]').each(function () {
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
        const tagify = new Tagify(input, tagOptions[Number(input.dataset.tags)]);
        tagify.DOM.input.setAttribute('aria-labelledby', input.id + '-label');
    });

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

    $.fn.selectpicker.Constructor.BootstrapVersion = '5';
    $('[data-bootstrap-select]').selectpicker({ width: '100%', noneSelectedText: 'Select a city' });
    $('[data-bootstrap-select]').each(function () {
        $(this).parent().find('button.dropdown-toggle').attr('aria-labelledby', this.id + '-label');
    });
})();
