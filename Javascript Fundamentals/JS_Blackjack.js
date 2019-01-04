//In this game, two users: Player and Dealer. Both need an array of cards --> array of cards
//Calculate the numeric values of cards in each's deck.
//Decide whether to get a new card or not.
//Compare which one wins.

let suits = ['Clubs', 'Hearts', 'Diamonds', 'Spades'];
let values = ['Ace', 'King', 'Queen', 'Jack', 'Ten', 'Nine', 'Eight', 
    'Seven', 'Six', 'Five', 'Four', 'Three', 'Two'];

//DOM variables
let textArea = document.getElementById('text-area'),
    newGameBttn = document.getElementById('new-game-button'),
    hitBttn = document.getElementById('hit-button'),
    stayBttn = document.getElementById('stay-button');

//Game variables
let gameStarted = false,
    gameOver = false,
    playerWon = false,
    dealerScore = 0,
    playerScore = 0,
    dealerCards = [],
    playerCards = [],
    deck = [];

hitBttn.style.display = 'none';
stayBttn.style.display = 'none';
showStatus();

newGameBttn.addEventListener('click', function() {
    gameStarted = true;
    gameOver = false;
    playerWon = false;

    deckCard = createDeck();
    shuffleDeck(deckCard);
    dealerCards = [getNextCard(), getNextCard()];
    playerCards = [getNextCard(), getNextCard()];//Now, the 2 items in array are objects.
    
    newGameBttn.style.display = 'none';
    hitBttn.style.display = 'inline';
    stayBttn.style.display = 'inline';
    showStatus();
});

hitBttn.addEventListener('click', function() {
    playerCards.push(getNextCard());
    checkEndOfGame();
    showStatus();
});

stayBttn.addEventListener('click', function() {
    gameOver = true;
    checkEndOfGame();
    showStatus();
})

function createDeck() {
    let deck = [];//This time, this will be an array holding multiple objects.
    for(let suitsIdx=0; suitsIdx<suits.length; suitsIdx++) {
        for (let valuesIdx = 0; valuesIdx < values.length; valuesIdx++) {
            let card = {
                suit: suits[suitsIdx],
                value: values[valuesIdx]
            }//every loop in this nexted for-loop, a new card object is declared
            deck.push(card);//push an object into the array "deck"
        }
    }
    return deck;
}

function shuffleDeck(deck) {
    for (let i=0; i<deck.length; i++) {
        let swapIdx = Math.trunc(Math.random() * 52);
        let temp = deck[swapIdx];
        deck[swapIdx] = deck[i];
        deck[i] = temp;
    }
}

function getNextCard() {
    return deckCard.shift(); //deck.shift() will return the first card object in the array "deck"
}

function getCardString(card) {
    return card.value + " of " + card.suit;
}//Because objects won't be displayed, we need to get the strings(infor) from the card object.

function getNumericValue(card) {
    switch(card) {
        case 'Ace': return 1;
        case 'Two': return 2;
        case 'Three': return 3;
        case 'Four': return 4;
        case 'Five': return 5;
        case 'Six': return 6;
        case 'Seven': return 7;
        case 'Eight': return 8;
        case 'Nine': return 9;
        default: return 10;
    }
}

function getScore(cardArray) {
    let scoreSum = 0;
    let isAce = false;
    for(let i=0; i<cardArray.length; i++) {
        let card = cardArray[i].value;
        scoreSum += getNumericValue(card);
        if(card === 'Ace') {
            isAce = true;
        }
    }
    if (isAce === true && (scoreSum + 10) < 21) {
        scoreSum += 10;
    }
    return scoreSum;
}

function updateScore(cardArray) {
    dealerScore = getScore(dealerCards);
    playerScore = getScore(playerCards);
}

//Whether playerWon = true/false is in this function
function checkEndOfGame() {
    gameOver = true;

    dealerCards.push(getNextCard());
    updateScore();

    if(playerScore > 21) {
        playerWon = false;
        gameOver = true;
    }
    else if(dealerScore > 21) {
        playerWon = true;
        gameOver = true;
    }
    else if(gameOver) {
        if(playerScore <=21 && playerScore > dealerScore) {
            playerWon = true;
        }
        else
            {playerWon = false}
    }
}

//Display the game situation, including scores, and who wins in text area
function showStatus() {
    if(!gameStarted) {
        textArea.innerText = 'Welcome to Blackjack';
        return;
    };

    let dealerCardString = '';
    for(let idx=0; idx < dealerCards.length; idx++) {
        dealerCardString += getCardString(dealerCards[idx]) + '\n';
    }

    let playerCardString = '';
    for(let idx=0; idx < playerCards.length; idx++) {
        playerCardString += getCardString(playerCards[idx]) + '\n';
    }
    updateScore();

    textArea.innerText = 'Dealer has:\n' + 
    dealerCardString + 
    '(Score: ' + dealerScore + ') \n\n' + 
    'Player has: \n' +
    playerCardString +
    '(Score: ' + playerScore + ') \n\n';

    if(gameOver) {
        if(playerWon) {
            textArea.innerText += 'Player Win';
        }
        else 
            {textArea.innerText += 'Dealer Win';}

        newGameBttn.style.display = 'inline';
        hitBttn.style.display = 'none';
        stayBttn.style.display = 'none';
        gameStarted = false;
    }
}












//(Score: ' + dealerScore + ') 
//(Score: ' + playerScore + ') 
