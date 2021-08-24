// set a variable to hold our score;
let score = 1;

// set the link to the img source
const moleImgLink = 'https://www.cindyjobs.com/wp-content/uploads/2020/11/Pixabayt-2020.11.04-Animal-158236-Mole-862x650.png';

  // create an element
const img = document.createElement('img');
// assign the img source
img.src = moleImgLink;

// place an element inside another elements children list
document.body.prepend(img);

// change a style
img.style.width = '150px';
img.style.position = 'absolute';
img.style.userSelect = 'none';

// add a listener
img.addEventListener('click', whenImgClicked);


// what the...
let time = 1000;
// sets the first move in action;
setTimeout(moveMole, time );
function moveMole() {
    const random = Math.random() * 400;
    const random2 = Math.random() * 400;
    img.style.top = random2 + 'px';
    img.style.left = random + 'px';
    setTimeout(moveMole, time );
}

function whenImgClicked() {
    score *= 2;
    time -= 75;
}

setTimeout(function() {
    alert(score);
}, 20_000)
