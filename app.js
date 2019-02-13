// UI selecting
let input = document.querySelector("input");
let p1Button = document.querySelector("#p1Button");
let p2Button = document.querySelector("#p2Button");
let resetButton = document.querySelector("#reset");
let p1Display = document.querySelector("#p1Display");
let p2Display = document.querySelector("#p2Display");
let counterDisplay = document.querySelector("#counterDisplay");
let p1Score = 0;
let p2Score = 0;
let gameOver = false;
let winningScore = 5;

// Counting
p1Button.addEventListener("click", function(){
  if (!gameOver){
    p1Score++;
    if (p1Score === winningScore) {
      gameOver = true;
      p1Display.classList.add("winner");
    }
    p1Display.textContent = p1Score;
  }
})

p2Button.addEventListener("click", function(){
  if (!gameOver) {
    p2Score++;
    if (p2Score === winningScore) {
      gameOver = true;
      p2Display.classList.add("winner");
    }
    p2Display.textContent = p2Score;
  } 
})

// Reset
resetButton.addEventListener("click", function(){
  reset();
})

// Setting counter
input.addEventListener("change", function(){
  counterDisplay.textContent = this.value;
  winningScore = this.valueAsNumber;
  reset();
})

function reset(){
  p1Score = 0;
  p2Score = 0;
  p1Display.textContent = p1Score;
  p2Display.textContent = p2Score;
  p2Display.classList.remove("winner");
  p1Display.classList.remove("winner");
  gameOver = false;
}