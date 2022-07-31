let guessCount = 0;
let giveUpThreshold = 2;
let quitCommand = "q";
let userQuit = false;


let promptText = "Welcome! Enter your maximum guessing number."
let maxNumber;

// Ask user number, repeat if maxNumber is false = 0, NaN, undefined
do {
    maxNumber = parseInt(prompt(promptText));
    promptText = "That's not a valid maximum number. Try again.";
} while(!maxNumber || maxNumber < 0);

let targetNumber = Math.floor(Math.random() * maxNumber) + 1;
console.log(targetNumber);

promptText = "Guess my number!";

// Run guessing loop
while (true) {
    let userGuess = prompt(promptText);

    if (userGuess === quitCommand) {
        userQuit = true;
        break;
    }

    userGuess = userGuess;
    guessCount++;

    if (parseInt(userGuess) === targetNumber) {
        break;
    }
    else if (parseInt(userGuess) < targetNumber) {
        promptText = "Too low! Try again.";
    }
    else if (parseInt(userGuess) > targetNumber) {
        promptText = "Too high! Try again.";
    }
    else {
        promptText = `Your guess is ${userGuess}, which is not a valid number. Try again.`
    }

    if (guessCount > giveUpThreshold) {
        promptText = promptText + " You can press 'q' to give up";
    }
}

if (userQuit) {
    if (guessCount !== 1) {
        console.log(`You gave up after ${guessCount} guesses.`);
    }
    else {
        console.log(`You gave up after ${guessCount} guess.`);
    }
} else {
    if (guessCount !== 1) {
        console.log(`Congratulations! It took you ${guessCount} guesses.`);
    }
    else {
        console.log(`Congratulations! It took you ${guessCount} guess.`);
    }
}
