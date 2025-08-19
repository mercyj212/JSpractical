const inputDisplay = document.querySelector(".input");
const outputDisplay = document.querySelector(".output");
const keys= document.querySelectorAll(".keys div");

let currentInput = ""; //what user is typing
let displayInput = ""; //what is displayed in the input field 
let result = ""; //calculated result

keys.forEach(key => {
    key.addEventListener("click", () =>{
        const keyType = key.getAttribute("data-type") || key.getAttribute("data-keys");

        handleKeyPress(keyType);
    });
})


function handleKeyPress(key) {
    if (!isNaN(key) || key === ".") {
        currentInput += key;
        displayInput += key;
        inputDisplay.textContent = displayInput;
    }
    else if (["+", "-", "*", "/", "%",].includes(key)) {
        currentInput +=  key;

        let displaySymbol = key === "*" ? "×" : key === "/" ? "÷" : key;

        // if (key === "*") displaySymbol = "×";
        // else if (key === "/") displaySymbol = "÷";
        // // else if (key === "%") displaySymbol = "mod";
        // else displaySymbol = key;

        displayInput += "" + displaySymbol + ""; 
        inputDisplay.textContent =  displayInput;
    }
    else if (key === "brackets") {
        if (bracketToggle) {
            currentInput += "(";
            displayInput += "(";
        } else {
        currentInput += key;
        displayInput += key;
        }
        bracketToggle = !bracketToggle;
        inputDisplay.textContent = displayInput;
    }
    else if (key === "=") {
        try {
            result = eval(currentInput);
            outputDisplay.textContent = result;
        }catch {
            outputDisplay.textContent = "Error";
        }
    }
    else if (key === "clear") {
        currentInput = "";
        displayInput = "";
        result = "";
        inputDisplay.textContent = "0";
        outputDisplay.textContent = "0";
    }
    else if (key === "backspace") {
        currentInput = currentInput.trim().slice(0, -1);
        displayInput = displayInput.trim().slice(0, -1);
        inputDisplay.textContent = displayInput || "0";
    }
}