// html things you can do
// read elements from the page;
const button = document.querySelector('.cool-buttons');
// update elements text;
button.innerText = 'Cool button';
// update elements style
button.style.color = 'red';
// create elements
const h1 = document.createElement('h1');
// append elements (put them on the page)
document.body.appendChild(h1);
// update text
h1.innerText = 'I am a created h1';
// remove elements;
button.remove();
// re-append elements
document.body.appendChild(button);
// listen for events
button.addEventListener('click', function doSomething() {
    h1.innerText = 'you clicked the button';
    // add class to element
    h1.classList.add('active')
});
