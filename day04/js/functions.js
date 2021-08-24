function createElement(type, text) {
    const element = document.createElement(type);
    element.innerHTML = text;
    document.body.appendChild(element);
    return element;
}

const myElement = createElement('li', 'hello');
createElement('p', 'i am a p tag');
createElement('button', 'just another button');
createElement('h1', 'title');


console.log(myElement)