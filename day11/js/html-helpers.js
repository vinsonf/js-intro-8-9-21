export function createElement(type) {
    return document.createElement(type);
}

export function append(element, parent = document.body) {
    return parent.appendChild(element);
}

export function innerHTML(element, text) {
    element.innerHTML = text
}

export function style(element, property, value) {
    element.style[property] = value;
}

export function listen(element, event, cb) {
    element.addEventListener(event, cb);
}

export function addClass(element, className) {
    element.classList.add(className);
}
export function toggle(element, className) {
    element.classList.toggle(className);
}

export function query(selector, plural) {
    const all = document.querySelectorAll(selector);
    return plural ? all : all[0];
}
