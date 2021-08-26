// three primitive

const title = 'My App';
let score = 0;
let isPaused = true;

// 2 complex
const obj = {
    name: 'my name',
    score: 0,
    isPaused: true,
    push() {
        
    }
};
obj.push()

const array = [obj, title, score, isPaused, obj.name];



function addToArray(thing) {
    array.push(thing);

}

addToArray('This is added by a function');


const promise = fetch('https://jsonplaceholder.typicode.com/users');

promise.then(function(response) {
    return response.json();
}).then(function(data) {
    console.log(data);

    data.forEach(function(user) {
        // console.log(user.name);
        // const li = document.createElement('li');
        // document.body.appendChild(li);
        // li.innerText = user.email;
    })
});


const apis = [
    'https://dog.ceo/api/breeds/image/random',
    'https://api.artic.edu/api/v1/artworks',
    'https://www.boredapi.com/api/activity?type=recreational',
    'https://api.github.com/users/',
    ];


const input = document.createElement('input');
const ul = document.createElement('ul');
document.body.appendChild(ul);
document.body.appendChild(input);
document.querySelector('button').addEventListener('click', getActivity)

function getActivity() {
    const value = input.value;
    ul.innerHTML = '';
    const promise2 = fetch(apis[3] + value)

    promise2
    .then((res) => res.json())
    .then((data) => {
       displayGithub(data);
       return fetch(data.followers_url);
    }).then(res => res.json()).then(data => {
        console.log(data);
        data.forEach( user => {
            console.log(user);
            displayGithub(user);
        })
    })
}

function displayGithub(data) {
    const li = document.createElement('li');
    ul.appendChild(li);
    li.innerText = data.login;
    const img = document.createElement('img');
    img.src = data.avatar_url;
    img.style.width = '200px';
    li.appendChild(img);

    li.addEventListener('click', function() {
        input.value = data.login;
        getActivity();
    })
}

