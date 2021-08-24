const retrievedItems = localStorage.getItem('my-list');
let items = [];

if (retrievedItems) {
    items = JSON.parse(retrievedItems);
} else {
    localStorage.setItem('my-list', JSON.stringify(items));
}

function createElement(type, text) {
    const element = document.createElement(type);
    element.innerHTML = text;
    document.body.appendChild(element);
    return element;
}

const input = createElement('input');
const button = createElement('button', 'Add');

items.forEach(function (item) {
    const li = createElement('li', item);
})

button.addEventListener("click", function () {
    const li = createElement('li', input.value);
    items.push(input.value);
    localStorage.setItem('my-list', JSON.stringify(items));
  });
  