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

// Load the start button image
const startButtonImg = new Image();
startButtonImg.src = 'assets/images/start-button.webp'

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
    //startGame();
  }
});

// For desktops: Raise the spaceship when the mouse is held down
canvas.addEventListener('mousedown', () => {
  if (isGameStarted) {
    isHolding = true;
    spaceship.velocityY = lift;
  }
});

// For desktops: Set isHolding to false on mouse release to allow spaceship to drop
canvas.addEventListener('mouseup', () => {
  isHolding = false; 
});

// For mobiles: Start game if not started or raise spaceship
canvas.addEventListener('touchstart', () => {
  if (!isGameStarted) {
    isGameStarted = true;
    startGame();
    return
  }
  isHolding = true;
  spaceship.velocityY = lift; 
});

// For mobiles: Set isHolding to false on touchend to allow spaceship to drop
canvas.addEventListener('touchend', () => {
  isHolding = false; 
});

// Update the score bar
function updateScoreBar(score) {
  const highestScoreElement = document.getElementById('highest-score');

  if (score > highestScore) {
    highestScore = score;
  }
  highestScoreElement.textContent = highestScore;
}

// Increase the difficulty by increasing the number of asteroids every 10 seconds
function increaseDifficulty() {
  difficultyIncreaseTimer += 1;
  if (difficultyIncreaseTimer > 600) { 
    currentAsteroidCount = currentAsteroidCount * 1.5;
    currentDifficultyLevel++;
    difficultyIncreaseTimer = 0;
  }
}

// Update the spaceships position based on isHolding boolean
function updateSpaceshipPosition() {
  if (isHolding) {
    spaceship.velocityY = lift;
  } else {
    spaceship.velocityY += gravity; 
  }

  spaceship.y += spaceship.velocityY;
}

function drawSpaceship() {
  const tiltAngle = isHolding ? -10 : 0; // Tilt upwards when holding
  const radians = (Math.PI / 180) * tiltAngle; // Convert degrees to radians

  ctx.save(); 
  ctx.translate(spaceship.x + spaceship.width / 2, spaceship.y + spaceship.height / 2); // Move to spaceship center
  ctx.rotate(radians); 
  ctx.drawImage(
    spaceshipImg,
    -spaceship.width / 2, 
    -spaceship.height / 2,
    spaceship.width,
    spaceship.height
  );
  ctx.restore(); 
}

// Update the asteroid obstacles in the canvas
function updateObstacles() {
  for (let i = obstacles.length - 1; i >= 0; i--) {
    const obstacle = obstacles[i];
    obstacle.x -= obstacleSpeed;

    // Remove obstacles that are off-screen
    if (obstacle.x + obstacle.width < 0) {
      obstacles.splice(i, 1);
    }

    ctx.drawImage(obstacle.img, obstacle.x, obstacle.y, obstacle.width, obstacle.height);
  }

  if (obstacles.length === 0 || obstacles[obstacles.length - 1].x < canvas.width - 200) {
    createObstacle();
  }
}

// Create obstacle and add to obstacles array
function createObstacle() {
  for (let i = 0; i < currentAsteroidCount; i++) {
    const randomY = Math.random() * (canvas.height - 50); // Random Y position, keeping 50px margin
    obstacles.push({
      x: canvas.width + i * 100, // Slight offset for each asteroid 
      y: randomY, 
      width: obstacleWidth,
      height: obstacleWidth, 
      img: asteroidImages[Math.floor(Math.random() * asteroidImages.length)],
    });
  }
}

// Check if spaceship collides with asteroid or top/bottom of canvas
function checkCollision() {
  for (const obstacle of obstacles) {
    if (
      spaceship.x < obstacle.x + obstacle.width &&
      spaceship.x + spaceship.width > obstacle.x &&
      spaceship.y < obstacle.y + obstacle.height &&
      spaceship.y + spaceship.height > obstacle.y
    ) {
      isGameStarted = false;
    }
  }

  if (spaceship.y + spaceship.height > canvas.height / dpr || spaceship.y < 0) {
    isGameStarted = false;
  }
}

function displayScoreAndDifficulty() {
  ctx.fillStyle = 'white';
  ctx.font = '20px Arial';
  ctx.fillText(`Distance: ${Math.floor(score)}`, 10, 30);
  ctx.fillText(`Difficulty: ${Math.floor(currentDifficultyLevel)}`, 10, 60);
}