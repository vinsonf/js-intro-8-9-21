let score1 = 0;
let score2 = 0;
const p1Container = document.querySelector('#p1-container');
const p2Container = document.querySelector('#p2-container');
const p1ScoreContainer = document.querySelectorAll('span')[0];
const p2ScoreContainer = document.querySelectorAll('span')[1];

function updateScoreDisplay() {
    p1ScoreContainer.innerHTML = score1;
    p2ScoreContainer.innerHTML = score2;
}

updateScoreDisplay();

let deck = [];
const p1Deck = [];
const p2Deck = [];
const suits = ['\u2665', '\u2666', '\u2660', '\u2663'];


const hearts = createSuitCards(suits[0], 'red');
const diamonds = createSuitCards(suits[1], 'red');
const spades = createSuitCards(suits[2], 'black');
const clubs = createSuitCards(suits[3], 'black');

deck = hearts.concat(diamonds, spades, clubs);
deck.forEach(function(card) {
    displayCard(card);
});



shuffleDeck();




console.log(deck);


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

    const p1Card = p1Deck[p1Deck.length -1];
    const p2Card = p2Deck[p2Deck.length -1];

    if (p1Card.value === p2Card.value) {

        score1++;
        score2++;
        updateScoreDisplay();
    } else if (p1Card.value > p2Card.value) {
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


















