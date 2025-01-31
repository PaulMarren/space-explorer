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
