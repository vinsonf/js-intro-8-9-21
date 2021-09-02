let score1 = 0;
let score2 = 0;
const p1Container = document.querySelector('#p1-container');
const p2Container = document.querySelector('#p2-container');
console.log(document.querySelectorAll('span'));
const p1ScoreContainer = document.querySelectorAll('span')[0];
const p2ScoreContainer = document.querySelectorAll('span')[1];
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
updateScoreDisplay()



console.log(deck);


















