const input = document.querySelector('input');
const button= document.querySelector('button');
const ul = document.querySelector('ul');


button.addEventListener('click', addTodo);

function addTodo() {
    const li = document.createElement('li');
    li.innerText = input.value;
    ul.appendChild(li);

}