console.log("Js is working");

let counterValue = 0;
let lastUpdated = "Never";

const incrementBtn = document.querySelector("#incrementBtn");
const decrementBtn = document.querySelector("#decrementBtn");
const resetBtn = document.querySelector("#resetBtn");

const counterValueDisplay = document.querySelector("#counterValue");
const lastUpdatedDisplay = document.querySelector("#lastUpdated");

incrementBtn.addEventListener("click", () => {
    counterValue++;
    lastUpdated = new Date().toLocaleString();
    updateDisplay();
});

decrementBtn.addEventListener("click", () => {
    counterValue--;

    if (counterValue < 0) {
        alert("This cannot be decreased than 0");
        counterValue = 0;                   // Prevent negative values
    }

    lastUpdated = new Date().toLocaleString();
    updateDisplay();
});

resetBtn.addEventListener("click", () => {
    counterValue = 0;
    lastUpdated = "Never";
    updateDisplay();
});

function updateDisplay() {
    counterValueDisplay.textContent = counterValue;
    lastUpdatedDisplay.textContent = lastUpdated;
}

document.addEventListener("DOMContentLoaded", () => {
    updateDisplay();
});

