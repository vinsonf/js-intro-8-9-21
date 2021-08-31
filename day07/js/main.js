/* Playing Card

1. Color
2. Number/Value
3. Suit
4. image
5. size


*/
const deck = [];
const suits = ['\u2665', '\u2666', '\u2660', '\u2663'];
let currentSuit = 0;

for(let i = 0; i < 52; i++) {

    const cardObject = {
        color: getColor(suits[i % 4]),
        value: getValue(i % 13),
        suit: suits[i % 4],
        imgUrl: '',
        width: '200px',
        height: '284px'
    };

    deck.push(cardObject);
    displayCard(cardObject)

}

function displayCard(cardObject) {
    const div = document.createElement('div');
    document.body.appendChild(div);
    div.innerHTML = `
    <div >${cardObject.value}</div>
    <div style="text-align: center">${cardObject.suit}</div>
    <div style="text-align: right">${cardObject.value}</div>

    
    `;
    div.style.color = cardObject.color;
    div.style.fontSize = '80px';
    div.style.border = '2px solid black';
    div.style.width = cardObject.width;
    div.style.padding = '5px';
    div.style.position = 'absolute';
    div.style.backgroundColor = 'white';
    div.classList.add('card');
}


function getValue(number) {
    switch(number) {
        case 0: 
            return 'A';
            break;
        case 1:
            return 'K';
            break;
        case 11: 
            return 'Q';
            break;
        case 12: 
            return 'J';
            break;
        default:
            return number;
    }
}

function getColor(suit) {
    if (suit === suits[0] || suit === suits[1]) {
        return 'red';
    } else {
        return 'black';
    }
}

console.log(
    deck.sort( function(a, b) {
     if (a.suit > b.suit) {
        return 1;
     } else {
         return -1;
     }
    
    }
     ));




















