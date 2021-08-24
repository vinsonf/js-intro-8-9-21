const input = document.createElement('input');
document.body.appendChild(input);
input.type = 'color';
input.addEventListener('change', function doSomething() {
    console.log('test')
    document.body.style.backgroundColor = input.value;
});