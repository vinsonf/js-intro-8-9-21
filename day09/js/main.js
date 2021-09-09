// console.log(document.forms[0]);

// const firstForm = document.forms.my_cool_form;
// const firstForm = document.forms[0];
// const firstForm = document.forms['my_cool_form'];

const firstForm = document.createElement('form');
document.body.append(firstForm);


function createInput(name, type = 'text', value) {
    const usernameLabel = document.createElement('label');
    firstForm.append(usernameLabel);
    usernameLabel.innerHTML = `<br>${name} <br>`;
    const usernameInput = document.createElement('input');
    usernameInput.type = type;
    if (value) {
        usernameInput.value = value;
    }
    usernameInput.name = name;
    firstForm.append(usernameInput);
}

createInput('username', '',  'vin');
createInput('password', 'password', 'password');
createInput('color', 'color', '#777777');
createInput('date', 'date', '2016-01-01');
createInput('button', 'submit', 'login');



firstForm.addEventListener('submit', function(event) {
    console.log(event)
    event.preventDefault();
    const username = firstForm.username.value;
    const password = firstForm.password.value;
    const color = firstForm.color.value;

    // const username = firstForm[0].value;
    // const password = firstForm[1].value;
    // const color = firstForm[2].value;

    console.log(username, password, color);
    const result = document.querySelector('.result');
    result.innerHTML = `
    <h3>Username</h3>
    <h2>${username}</h2>
    <h3>Password</h3>
    <h2>${password}</h2>
    <h3>Color</h3>
    <h2>${color}</h2>
    `;
    firstForm.style.display = 'none';
})