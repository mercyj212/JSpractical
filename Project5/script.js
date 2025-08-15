console.log("JS file loaded");

let randomNumber = Math.floor(Math.random() * 100) + 1;

const guessInput = document.getElementById("guessInput");
const guessButton = document.getElementById("guessButton");
const result = document.getElementById("result");
const playAgainButton = document.getElementById("playAgain");

guessButton.addEventListener("click", function () {
    let userGuess = Number(guessInput.value);
    if (!userGuess || userGuess < 1 || userGuess > 100) {
        result.textContent = "Please enter a valid number between 1 and 100.";
        return;
    }

    if(userGuess === randomNumber) {
        result.textContent = `🎉 Correct! The number was ${randomNumber}.`;
        guessButton.disabled = true;
        playAgainButton.style.display = "inline-block";
    } else if (userGuess < randomNumber) {
        result.textContent = "Too low! Try again.";
    } else {
        result.textContent = "Too high! Try again.";
    }

    guessInput.value = "";  
    guessInput.focus(); 
});

playAgainButton.addEventListener("click", function () {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    result.textContent = " ";
    guessButton.disabled = false;
    playAgainButton.style.display = "none";
    guessInput.value = "";
    guessInput.focus();
});

guessInput.addEventListener("keyup", function(e) {
    if (e.key === "Enter") {
        guessButton.click();
    }
});
// Initial message