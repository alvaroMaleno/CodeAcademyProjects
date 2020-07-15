let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

let advanceRound = () => currentRoundNumber += 1;
let getDistance = (numberA, numberB) => {
    return numberA > numberB ? numberA - numberB: numberB - numberA;
}

function generateTarget(){
    return Math.floor(Math.random() * 10);
}

function compareGuesses(humanGuess, computerGuess, secretNumber){
    let humanDifference = getDistance(humanGuess, secretNumber);
    let computerDifference = getDistance(computerGuess, secretNumber);

    if(humanDifference === computerDifference 
        || humanDifference < computerDifference){
        return true;
    }
    else{
        return false;
    }
}

function updateScore(winner){
    if(winner === 'human'){humanScore += 1;}
    else{computerScore += 1;}
}
