(() => {
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
        const label = document.getElementById(track.id + '-label').textContent;
        const handleAttributes = config.start.map((_, index) => ({
            'aria-label': config.start.length === 1 ? label : label + (index ? ' upper value' : ' lower value'),
            'aria-orientation': config.orientation || 'horizontal'
        }));
        noUiSlider.create(track, { range: percentageRange, step: 1, format: integer, handleAttributes, ...config });
    }

    const hoverOutput = document.getElementById('sl-hover-value');
    const hover = document.getElementById('sl-hover').noUiSlider;
    hover.on('update', ([value]) => { hoverOutput.textContent = value; });
    hover.on('hover', value => { hoverOutput.textContent = integer.to(value); });

    const low = document.getElementById('sl-low');
    const high = document.getElementById('sl-high');
    const dynamic = document.getElementById('sl-dynamic').noUiSlider;
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
