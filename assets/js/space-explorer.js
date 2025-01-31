// Select the canvas wrapper
const canvasWrapper = document.getElementById('canvas-wrapper');
// Create canvas
const canvas = document.createElement('canvas');
// Create 2d context object
const ctx = canvas.getContext('2d');

// Set canvas dimensions
const dpr = window.devicePixelRatio || 1;
resizeCanvas();

// Add canvas to canvasWrapper
canvasWrapper.appendChild(canvas);

// Disable right-click on the canvas
canvasWrapper.addEventListener('contextmenu', (event) => {
  event.preventDefault();
});

// Handle window resizing
window.addEventListener('resize', resizeCanvas);

function resizeCanvas() {
  canvas.width = canvasWrapper.offsetWidth * dpr;
  canvas.height = canvasWrapper.offsetHeight * dpr;
  canvas.style.width = `${canvasWrapper.offsetWidth}px`;
  canvas.style.height = `${canvasWrapper.offsetHeight}px`;
  ctx.scale(dpr, dpr);

  // Redraw the start button if the game is not started
  if (!isGameStarted) {
    drawStartButton();
  }
}

// Load the start button image
const startButtonImg = new Image();
startButtonImg.src = 'assets/images/start-button.webp'

// Draw the start button once the start button image has loaded
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

// Load the spaceship image
const spaceshipImg = new Image();
spaceshipImg.src = 'assets/images/ufo.webp';

// Load the asteroid images
const asteroidImages = [
  'assets/images/asteroid-1.webp',
  'assets/images/asteroid-2.webp',
  'assets/images/asteroid-3.webp',
].map(src => {
  const img = new Image();
  img.src = src;
  return img;
});

// Variable for score tracking
let highestScore = 0;

// Game variables
let spaceship, obstacles, isGameStarted, score, currentAsteroidCount, difficultyIncreaseTimer, currentDifficultyLevel;

// Constants
const gravity = 0.6;
const lift = -5;
const obstacleWidth = 50;
const obstacleSpeed = 3;

// Variable to determine if player is holding mouse button
let isHolding = false;

// Initalize the game
function initializeGame() {
  spaceship = {
    x: 100,
    y: 200,
    width: 60,
    height: 50,
    velocityY: 0,
  };
  obstacles = [];
  isGameStarted = false;
  score = 0;
  currentAsteroidCount = 1; 
  difficultyIncreaseTimer = 0; 
  currentDifficultyLevel = 1;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawStartButton();
}

initializeGame();

// Start the game when the canvas is clicked if game is not started
canvas.addEventListener('click', () => {
  if (!isGameStarted) {
    isGameStarted = true;
    startGame();
  }
});