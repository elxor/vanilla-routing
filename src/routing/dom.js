class Dom {
    constructor(selector){
        this.elem = typeof selector === 'string'
            ? document.querySelector(selector)
            : selector;
    }

    html(html) {
        this.elem.innerHTML = html;
        return this.elem;
    }

    clear() {
        this.html('');
        return this.elem;
    }
}

export function dom(selector) {
    return new Dom(selector);
}

dom.create = (tagName, classes = '') => {
    const el = document.createElement(tagName);
    if (classes) {
        el.classList.add(classes);
    }
    return dom(el);
}
