const hands = ['rock', 'paper', 'scissors'];

function getHand() {
    return hands[parseInt(Math.random() * 10) % 3];
    }

let thing1 = 
    {name: 'Thing 1', getHand: getHand}

let thing2 = 
    {name: 'Thing 2', getHand: getHand}

function playRound(thing1, thing2) {

    let hand1 = thing1.getHand();
    let hand2 = thing2.getHand();
    let winner = null;

    if ((hand1 === 'rock' && hand2 === 'scissors') || (hand1 === 'paper' && hand2 === 'rock') || (hand1 === 'scissors' && hand2 === 'paper')) {
        console.log(thing1.name + ' played ' + hand1 + '.', thing2.name + ' played ' + hand2 + '.', 'Thing 1 wins the round.');
        return winner = thing1
    } else if (hand1 === hand2) {
        console.log(thing1.name + ' played ' + hand1 + '.', thing2.name + ' played ' + hand2 + '.', 'It is a tie.');
        return winner
    } else {
        console.log(thing1.name + ' played ' + hand1 + '.', thing2.name + ' played ' + hand2 + '.', 'Thing 2 wins the round.')
        return winner = thing2
    }
}

playRound(thing1, thing2)
