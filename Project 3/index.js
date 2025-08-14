console.log("js file is linked");

const changeBtn = document.querySelector("#changeBtn");
const startBtn = document.querySelector("#startBtn");
const resetBtn = document.querySelector("#resetBtn");
const colorName = document.querySelector("#colorName");

const colors = ["red", "green", "blue", "yellow", "orange", "pink", "purple"];
let intervalid = null;

// Add smooth background color transition
document.body.style.transition = "background-color 0.8s ease";

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}

function setColor(color) {
    document.body.style.backgroundColor = color;
    // Update the color name text
    colorName.textContent = `Current Color: ${color}`;
}

changeBtn.addEventListener("click", function() {
     const randomColor = colors[Math.floor(Math.random() * colors.length)];
     setColor(randomColor);
}); 

startBtn.addEventListener("click", function() {
    if (!intervalid) {
        intervalid = setInterval(function() {
            const randomColor = getRandomColor();
            setColor(randomColor);
        }, 2000);
    }
    
}); 

resetBtn.addEventListener("click", function() {
    clearInterval(intervalid);
    intervalid = null;
    setColor("white");
});