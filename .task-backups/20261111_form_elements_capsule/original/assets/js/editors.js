(() => {
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
        const bubble = variant === 'bubble';
        const editor = new Quill(frame.querySelector('[id$="-editor"]'), {
            theme: bubble ? 'bubble' : 'snow',
            bounds: frame,
            placeholder: 'Type something…',
            modules: {
                toolbar: variant === 'full' ? full : standard,
                syntax: !bubble
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
