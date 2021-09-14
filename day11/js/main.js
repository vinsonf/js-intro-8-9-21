import { append, createElement, innerHTML, listen, query, style, toggle } from "./html-helpers.js";

const h1 = createElement('h1');
append(h1);
innerHTML(h1, 'Hello World');
style(h1, 'color', 'red');
style(h1, 'background-color', 'black');
listen(h1, 'click', () => { alert('click')});
toggle(h1, 'text-center');
append(query('p'), h1)
