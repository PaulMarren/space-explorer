// Select the canvas wrapper
const canvasWrapper = document.getElementById('canvas-wrapper');
// Create canvas
const canvas = document.createElement('canvas');
// Create 2d context object
const ctx = canvas.getContext('2d');

// Disable right-click on the canvas
canvasWrapper.addEventListener('contextmenu', (event) => {
    event.preventDefault();
});

// Set canvas dimensions
const dpr = window.devicePixelRatio || 1;
canvas.width = canvasWrapper.offsetWidth * dpr;
canvas.height = canvasWrapper.offsetHeight * dpr;
canvas.style.width = `${canvasWrapper.offsetWidth}px`;
canvas.style.height = `${canvasWrapper.offsetHeight}px`;
ctx.scale(dpr, dpr);

// Add canvas to canvasWrapper
canvasWrapper.appendChild(canvas);

// Variables for score tracking
let highestScore = 0;

// Game variables
let spaceship, obstacles, isGameStarted, score, currentAsteroidCount, difficultyIncreaseTimer, currentDifficultyLevel;

// Load the start button image
const startButtonImg = new Image();
startButtonImg.src = 'assets/images/start-button.png'

startButtonImg.onload = function () {
  drawStartButton();
};

function drawStartButton() {
  const buttonWidth = 222; 
  const buttonHeight = 222; 
  const centerX = (canvas.width / dpr - buttonWidth) / 2; 
  const centerY = (canvas.height / dpr - buttonHeight) / 2; 

  ctx.drawImage(startButtonImg, centerX, centerY, buttonWidth, buttonHeight);
}