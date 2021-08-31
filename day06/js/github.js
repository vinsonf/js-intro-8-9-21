
const baseUrl = 'https://api.github.com/users/';

// create elements
const input = document.createElement('input');
const button = document.createElement('button');
const ul = document.createElement('ul');
input.value = 'geekwisevinson'

// place elements on the page

document.body.appendChild(input);
document.body.appendChild(button);
document.body.appendChild(ul);

// add text
button.innerHTML = 'Get Git User';

button.addEventListener('click', function() {
    debugger;
    const login = input.value;
    getUser(login);
})


function getUser(login){
    fetch(baseUrl + login)
    .then(function(res) {return res.json()})
    .then( data => {
        debugger;
      
        ul.innerHTML = '';

        const li = document.createElement('li');
        ul.appendChild(li);

        li.innerHTML = `
        
            <h1>${data.login}</h1>
            <img src="${data.avatar_url}" width="200">
            <h2>${data.name}</h2>
            <h3>${data.location}</h3>
            <pre>
                ${JSON.stringify(data, null, 4)}
            </pre>
        `;
    })
}

