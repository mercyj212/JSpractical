// Dice Roller Program

function rollDice() {

    const numOfDice = document.getElementById("numOfDice").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");
    
    const values = [];
    const images = [];

    const diceSound = new Audio('sounds/dicesound.mp3');
    diceSound.play();

    for(let i = 0; i < numOfDice; i++) {
         const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);

        const imageSrc = `images/dice${values}.svg`;
        images.push(`<img class="dice" src="images/dice${value}.svg" alt="Dice ${value}">`);  
      
    }
    

    diceResult.textContent = `dice: ${values.join(', ')}`;
    diceImages.innerHTML = images.join('');
    diceImages.classList.add("shake");

    setTimeout(() => {
        diceImages.classList.remove("shake");
     }, 600);

    
}

const toggleBtn = document.getElementById("themeToggle");
// const icon = document.getElementById("themeIcon");

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // if (document.body.classList.contains("dark")) {
    //     icon.src = "images/toggle.svg";
    // }else {
    //     icon.src = ""
    // }
});