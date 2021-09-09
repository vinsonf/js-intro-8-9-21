

const body = document.body;
// ordered or unordered list
const list = document.createElement('ol');
// input 
const input = document.createElement('input');
// button
const button = document.createElement('button');
// form
const form = document.createElement('form');
// li * infinity when we click button
form.addEventListener('submit', whenButtonIsClicked );

let todos = getTodos();

createView();











function whenButtonIsClicked(event) {
    event.preventDefault();
    if (!input.value) {
        return;
    }
    
    addTodoItem(input.value);
    saveTodos();
    createLi(input.value);
    resetsInput(input);   
}


function createLi(value) {
    const li = document.createElement('li');
    li.innerHTML = value;
    list.append(li);

    li.addEventListener('click', () => {
        removeItemFromTodos(value);
    
        removeLi(li);
        saveTodos();
    })
}
function addTodoItem(value) {
    todos.push(value);
}
function removeItemFromTodos(value) {
    const index = todos.findIndex((item) => { return value === item});
    todos.splice(index, 1)
    console.log(todos, index);
}

function removeLi(li) {
    li.remove();
}

function resetsInput(input) {
    input.value = '';
}

function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todos));
}



function getTodos() {
    let todos = localStorage.getItem('todos');
    if (!todos) {
        localStorage.setItem('todos', JSON.stringify([]));
        todos = [];
    } else {
        todos = JSON.parse(todos);
        todos.forEach(function(todo) {
            createLi(todo);
        })
    }
    return todos;
}

function createView() {
    // style
form.style.border = '5px solid green';
form.style.padding = '20px';
list.style.border = '5px solid blue';
list.style.minHeight = '40px';

// appends
body.append(form);
form.append(input);
form.append(button);
body.append(list);


// text
button.innerHTML = 'ADD';
}