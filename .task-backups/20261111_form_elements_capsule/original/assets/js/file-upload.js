document.querySelectorAll('[data-upload]').forEach(section => {
    const picker = section.querySelector('input[type="file"]');
    const dropzone = section.querySelector('.fu-drop');
    const list = section.querySelector('.fu-files');
    const status = section.querySelector('.fu-status');
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
