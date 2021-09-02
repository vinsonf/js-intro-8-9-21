function displayCard(cardObject) {
    
    const div = document.createElement('div');
    cardObject.element = div;
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

function updateCardsZIndex(deck) {
    deck.forEach(function(item, index) {
        item.element.style.zIndex = index;
    })

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

function createSuitCards(suit, color) {
    const suitDeck = [];
    for(let i = 0; i < 13; i++) {
        const cardObject = {
            color: color,
            value: getValue(i % 13),
            suit: suit,
            imgUrl: '',
            width: '200px',
            height: '284px'
        };
        suitDeck.push(cardObject);
    }
    return suitDeck;
}


function shuffle(deck) {
    deck.sort(function(a,b) {
        if (Math.random() > .5) {
            return -1;
        } else {
            return 1;
        }
    })
}





// for(let i = 0; i < 52; i++) {

//     const cardObject = {
//         color: getColor(suits[i % 4]),
//         value: getValue(i % 13),
//         suit: suits[i % 4],
//         imgUrl: '',
//         width: '200px',
//         height: '284px'
//     };

//     deck.push(cardObject);
//     displayCard(cardObject)

// }

function shuffleDeck() {
    shuffle(deck);
    updateCardsZIndex(deck);
    console.log(deck);
}


function updateScoreDisplay() {
    p1ScoreContainer.innerHTML = score1;
    p2ScoreContainer.innerHTML = score2;
}



function dealDeck() {
    deal(deck, p1Deck, p2Deck);
}

function deal(deck, deck1, deck2) {

    deck.forEach(function(card, index) {
        console.log(p2Container, card)

        if (index % 2 === 0) {
            deck1.push(card);
            p1Container.prepend( card.element )
        } else {
            deck2.push(card);
            p2Container.prepend( card.element )
        }
    })
    console.log(deck1, deck2);
}

function compare() {
    if (p1Deck.length === 1) {

        let winner = '';

        if (score1 === score2) {
            winner = "it's a Tie";
        } else if (score1 > score2) {
            winner = 'Player 1';
        } else {
            winner = 'Player 2';
        }

        alert('Game Over. the winner is....')
        alert(winner);
        window.location.reload();
        
    }
    const p1Card = p1Deck[p1Deck.length -1];
    const p2Card = p2Deck[p2Deck.length -1];

    if (p1Card.value === p2Card.value) {

        score1++;
        score2++;
        updateScoreDisplay();
    } else if (getPointValue(p1Card.value) > getPointValue(p2Card.value)) {
        score1++;
        updateScoreDisplay();
    } else {
        score2++;
        updateScoreDisplay();
    }

    p1Card.element.remove();
    p2Card.element.remove();
    p1Deck.pop();
    p2Deck.pop();
}

function getPointValue(value) {
    if (typeof value === 'number'){
        return value;
    } else if( value === 'J') {
        return 11;
    } else if( value === 'Q') {
        return 12;
    } else if( value === 'K') {
        return 13;
    } else {
        return 14;
    }
}

