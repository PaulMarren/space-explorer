# Space Explorer
Space Explorer is a fun skill and reaction based game that takes place in space. You must control the spaceship to travel as far as possible while avoiding asteroids and planets.

The live page can be viewed here: [Link to Space Explorer](https://paulmarren.github.io/space-explorer/ "Link to the live website")

![Mockup image of Space Explorer](assets/docs/images/mockup-image.jpg)

# Table of Contents
- [Space Explorer](#space-explorer)
- [UX](#ux)
   - [User stories](#user-stories)
   - [Design](#design)
   - [Wireframes](#wireframes)
- [Technologies](#technologies)  
- [Manual Testing](#manual-testing)
   - [Starting the game](#starting-the-game)
   - [Spaceship controls](#spaceship-controls)
   - [Obstacle generation](#obstacle-generation)
   - [Collision detection](#collision-detection)
   - [Score and difficulty tracking](#score-and-difficulty-tracking)
   - [Highest score tracking](#highest-score-tracking)
   - [Responsiveness](#responsiveness)
   - [Game reset](#game-reset)
   - [Manual testing summary](#summary-of-manual-testing)
 - [Validator Testing](#validator-testing)
   - [HTML validator](#html-validator)
   - [CSS validator](#css-validator)
   - [JavaScript validator](#javaScript-validator)
 - [Lighthouse Testing](#lighthouse-testing)  
   - [Desktop lighthouse results](#desktop-lighthouse-results)
   - [Mobile lighthouse results](#mobile-lighthouse-results)
 - [Bugs](#bugs) 
   - [Unfixed bugs](#unfixed-bugs)
   - [Fixed bugs](#fixed-bugs)
 - [Deployment](#deployment)
   - [Github pages](#github-pages)
 - [Credits](#credits)  

## UX

### User stories
1. **As a new player, I want to understand how to start the game so that I can begin playing immediately.**
   - The game displays a clear start button when the page loads, making it easy for new players to start the game.
   
   ![Start button image](assets/docs/images/start-button.jpg)
2. **As a player, I want to control the spaceship easily and consistently so that I can navigate through obstacles.**
   - The spaceship can be controlled by holding the mouse button (or tapping on mobile) to lift the spaceship and releasing it to let it fall.

   ![Spaceship control image](assets/docs/images/spaceship-control.gif)
3. **As a player, I want to see my score and the difficulty level so that I can track my progress.**
   - The game displays the current score and difficulty level in the top-left corner of the screen.

   ![Distance and difficulty tracker image](assets/docs/images/distance-difficulty.jpg)
4. **As a player, I want the game to increase in difficulty over time so that I am challenged as I play.**
   - The game increases the number of asteroids every 10 seconds, making it progressively harder to avoid collisions.

   ![Difficulty increasing image](assets/docs/images/difficulty-increasing.gif)
5. **As a player, I want to see my highest score so that I can try to beat it in future games.**
   - The game displays the highest score achieved during the session, encouraging players to improve their performance.

   ![High score image](assets/docs/images/best-score.jpg)
6. **As a mobile player, I want the game to work seamlessly on my device so that I can enjoy the game on the go.**
   - The game supports touch events, allowing mobile players to control the spaceship by tapping the screen.

   ![Mobile play image](assets/docs/images/mobile-play.gif)
7. **As a player, I want the game to restart quickly after losing so that I can try again without delay.**
   - The game resets immediately after a collision, allowing players to start a new game with a single click or tap.

   ![Game restart image](assets/docs/images/game-restart.gif)


### Design
1. **Visual Design**
   - **Title Image and Start Button**: The game features a visually appealing title image and a start button centered on the screen. These elements are designed to be intuitive and welcoming for new players.
   - **Spaceship and Asteroids**: The spaceship and asteroid images are simple yet visually distinct, making it easy for players to differentiate between them during gameplay.
   - **Score and Difficulty Display**: The score and difficulty level are displayed in a clean, readable font at the top of the screen, ensuring players can quickly access this information.

2. **Game Mechanics**
   - **Spaceship Control**: The spaceship is controlled by holding the mouse button (or tapping on mobile) to lift it and releasing to let it fall. This mechanic is easy to understand and provides a satisfying sense of control.
   - **Obstacle Generation**: Asteroids are generated dynamically, with their positions randomized to create a unique challenge in each game. The number of asteroids increases over time, ensuring the game remains challenging.
   - **Collision Detection**: The game checks for collisions between the spaceship and asteroids, as well as with the top and bottom of the screen. This ensures fair gameplay and clear feedback when the game ends.

3. **Difficulty Progression**
   - The number of asteroids increases every 10 seconds. This gradual increase in difficulty keeps players engaged and motivated to improve their skills.

4. **Responsive Design**
   - The game canvas resizes dynamically to fit the screen size, ensuring a consistent experience across different devices. Touch events are supported for mobile players, making the game accessible on smartphones and tablets.

5. **User Feedback**
   - The game provides immediate feedback when the player loses, resetting the game quickly so players can try again. The highest score is displayed to encourage players to beat their previous record.

### Wireframes
**Desktop**
<br>
![Desktop wireframe](assets/docs/images/desktop-start-screen.png)

**Mobile**
<br>
![Mobile wireframe](assets/docs/images/mobile-start-screen.png)

## Technologies
### Languages used
  - HTML5
  - CSS3
  - JavaScript
### Frameworks, Libraries & Programs Used
   1. Git
      - Git was used for version control by utilizing the Visual Studio Code terminal to commit to Git and Push to GitHub.
   2. GitHub
      - GitHub is used to store the projects code after being pushed from Git and to deploy the website.
   3. Visual Studio Code
      - Visual Studio Code was used as the IDE.

## Manual Testing
### Starting the game

**Testing Method**

- Desktop: Click the start button image using a mouse.

- Mobile: Tap the start button image using a touchscreen device.

**Expected Result**

- The game should start immediately after clicking or tapping the start button.

- The spaceship should appear on the screen, and asteroids should begin to generate and move across the canvas.

- The score and difficulty level should be displayed in the top-left corner.

**Actual Result**

- The game started as expected on both desktop and mobile devices.

- The spaceship appeared, and asteroids began to generate and move.

- The score and difficulty level were displayed correctly.

### Spaceship Controls
**Testing Method**

- Desktop: Hold down the mouse button to lift the spaceship and release it to let it fall.

- Mobile: Tap and hold the screen to lift the spaceship and release to let it fall.

**Expected Result**

- The spaceship should move upward when the mouse button is held down (or the screen is tapped and held on mobile).

- The spaceship should tilt upward slightly while lifting.

- The spaceship should fall when the mouse button is released (or the tap ends on mobile).

**Actual Result**

- The spaceship moved upward and tilted as expected when the mouse button was held down or the screen was tapped.

- The spaceship fell when the mouse button was released or the tap ended.

### Obstacle Generation
**Testing Method**

- Play the game for several minutes and observe the asteroid generation.

**Expected Result**

- Asteroids should generate dynamically and move across the screen from right to left.

- The number of asteroids should increase every 10 seconds as the difficulty level increases.

**Actual Result**

- Asteroids generated dynamically and moved across the screen as expected.

- The number of asteroids increased every 10 seconds, and the difficulty level was displayed correctly.

### Collision Detection
**Testing Method**

- Intentionally collide the spaceship with an asteroid.

- Intentionally collide the spaceship with the top or bottom of the canvas.

**Expected Result**

- The game should end immediately upon collision.

- The game should reset, displaying the start button and title image.

**Actual Result**

- The game ended immediately upon collision with an asteroid or the canvas boundaries.

- The game reset correctly, displaying the start button and title image.

### Score and Difficulty Tracking
**Testing Method**

- Play the game and observe the score and difficulty level.

**Expected Result**

- The score should increase as the spaceship travels further.

- The difficulty level should increase every 10 seconds.

**Actual Result**

- The score increased as expected, and the difficulty level increased every 10 seconds.

### Highest Score Tracking
**Testing Method**

- Play the game multiple times, achieving different scores.

**Expected Result**

- The highest score should be updated and displayed correctly after each game.

**Actual Result**

- The highest score was updated and displayed correctly after each game.

### Responsiveness
**Known Issue: Page Refresh Required in Chrome DevTools**

When testing the game’s responsiveness using Chrome DevTools, the canvas may not resize dynamically unless the page is refreshed. This occurs because the resize event is not always triggered correctly in Responsive Design Mode, even though the event listener is properly implemented in the code.

**Steps to Test Responsiveness**
1. Open the game in Chrome and launch DevTools (F12).

2. Switch to the Responsive Design Mode.

3. Select a device or manually adjust the screen size.

4. Refresh the page after changing the screen size to ensure the canvas resizes correctly.

**Verify that**

- The canvas fits the new screen size.

- All game elements (spaceship, asteroids, score, etc.) are visible and functional.

- The game remains playable on the new screen size.

**Expected Result**
- After refreshing the page, the canvas should resize to fit the new screen size.

- All game elements should adjust accordingly, and the game should remain fully functional.

**Actual Result**
- The canvas resized correctly after refreshing the page.

- All game elements adjusted as expected, and the game remained playable on all tested screen sizes.

**Workaround**

To ensure the canvas resizes correctly during testing:

- Manually refresh the page after changing the screen size in Chrome DevTools.

- Alternatively, test responsiveness on actual devices.

### Game Reset
**Testing Method**

- Collide the spaceship with an asteroid or the canvas boundaries to end the game.

**Expected Result**

- The game should reset immediately, displaying the start button and title image.

**Actual Result**

- The game reset as expected, allowing players to start a new game immediately.

### Summary of Manual Testing
All test cases were executed successfully, and the game behaved as expected. No major issues were found during manual testing.

## Validator Testing
### HTML Validator
The W3C Markup Validator was used to validate index html page and ensure there was no errors.
![HTML validator results](assets/docs/validator-testing/index-page-html-validator-results.jpg)

### CSS Validator
The W3C CSS Validator Service was used to validate the CSS stylesheet and ensure there was no errors.
![CSS validator results](assets/docs/validator-testing/css-validator-results.jpg)

### JavaScript Validator
The JavaScript Validator (https://jshint.com/) was used to check the scripts.js file for any errors.
![JavaScript validator results](assets/docs/validator-testing/javascript-validator-results.jpg)

## Lighthouse Testing
Lighthouse testing was used to determine the site's performance, accessibility, best practices and SEO. Special emphasis was layed on performance and accessibility to provide a great user experience for every visitor, no matter the device or conditions.

### Desktop lighthouse results
![Desktop lighthouse results](assets/docs/lighthouse-testing/lighthouse-results-desktop.jpg)

### Mobile lighthouse results
![Mobile lighthouse results](assets/docs/lighthouse-testing/lighthouse-results-mobile.jpg)

## Bugs
### Unfixed bugs
**Page Refresh Required in Chrome DevTools**

When testing the game’s responsiveness using Chrome DevTools, the canvas may not resize dynamically unless the page is refreshed. This occurs because the resize event is not always triggered correctly in Responsive Design Mode, even though the event listener is properly implemented in the code.

### Fixed bugs

**Touchstart and Mousedown event being triggered simultaneously in Chrome DevTools**

When testing the game’s while at smaller screen sizes using Chrome DevTools, the Mousedown event and Touchstart event was being triggered simultaneously when clicking the canvas causing the spaceship to lift twice. 

I solved this by creating a single method to handle the when the canvas is clicked on via mousedown or touchstart. The method uses prevents the default behaviour of the event and ensures only one event is processed at a time.

**Unable to get a lighthouse reading**

When trying to test my website using lighthouse testing i was unable to get a result because my website had no elements as everything is displayed in a canvas. 

I solved this by adding a fallback element of the title image which is then hidden when the canvas is loaded.

## Used platforms and devices
### Browsers
- Google Chrome
- Microsoft Edge
- Mozilla Firefox

### Smartphones
- Oppo Reno 4z 5G

## Deployment
### Github pages
The project was deployed to GitHub Pages using the following steps...

1. **Log in to GitHub and locate the GitHub Repository.**  
   ![GitHub repository image](assets/docs/github-deployment/repository-image.jpg)

2. **At the top of the Repository, locate the "Settings" Button on the menu.**  
   ![GitHub Settings button image](assets/docs/github-deployment/settings-button.jpg)

3. **Scroll down the Settings page until you locate the "GitHub Pages" Section.**  
   ![GitHub pages button image](assets/docs/github-deployment/pages-button.jpg)

4. **Under "Source", click the dropdown called "None" and select "main".**  
   ![GitHub branch dropdown image](assets/docs/github-deployment/branch-image.jpg)

5. **Scroll back down through the page to locate the now published site link in the "GitHub Pages" section.**  
   ![GitHub branch dropdown image](assets/docs/github-deployment/deployments-image.jpg)

## Credits
### [Polotno Studio](https://studio.polotno.com/)
* Used to create title image and start button icon.

### [Techsini](https://techsini.com/multi-mockup/index.php)
* Used to create the mockup in the readme file.

### [HTML validator](https://validator.w3.org/)
* Used to verify HTML code.

### [CSS validator](https://jigsaw.w3.org/css-validator/)
* Used to verify CSS code.

### [JavaScript validator](https://jshint.com/)
* Used to verify JavaScript code.

### [Image Resizer](https://imageresizer.com/)
* Used to resize images.

### [Favicon Generator](https://favicon.io/)
* Used to create favicons.


### [Images]
* [Spaceship image](https://pixabay.com/vectors/aliens-spaceship-rocket-ship-moon-36912/)
* [Asteroid 1 image](https://pixabay.com/vectors/asteroid-blast-cosmos-astronomy-8464820/)
* [Asteroid 2 image](https://pixabay.com/illustrations/planetarium-comet-falling-star-5636947/)
* [Asteroid 3 image](https://pixabay.com/vectors/eris-planet-terrestrial-satellite-8236210/)
* [Background image](https://creazilla.com/media/vector/7869965/shooting-star)