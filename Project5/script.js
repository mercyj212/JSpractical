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
        result.style.color = "green"
        guessButton.disabled = true;
        playAgainButton.style.display = "inline-block";
    } else if (userGuess < randomNumber) {
        result.textContent = "Too low! Try again.";
        result.style.color = "red";
        result.classList.add("show", "shake");

        
        setTimeout(() => {
            result.classList.remove("shake")
        }, 300);
    } else {
        result.textContent = "Too high! Try again.";
        result.style.color = "red";
        result.classList.add("show", "shake");

        setTimeout(() => {
            result.classList.remove("shake")
        }, 300);
    }

    guessInput.value = "";  
    guessInput.focus(); 
});

playAgainButton.addEventListener("click", function () {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    result.textContent = " ";
    result.style.color = "#1d1d1d"
    result.classList.remove("show");
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

result.classList.add("show");