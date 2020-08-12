// Variables
let numberOfSquares = 6;
let colors = [];
let pickedColor;
// Selectors
const squares = document.querySelectorAll('.square');
let rgbDisplay = document.getElementById('rgbDisplay');
let messageDisplay = document.getElementById('message');
let h1 = document.querySelector('h1');
let resetButton = document.getElementById('resetBtn');
let modeButtons = document.querySelectorAll('.mode');

// Use "backgroundColor" instead of "background" otherwise it won't work in Firefox as it's not supported yet.

init();

function init() {
  setUpModeButtons();
  setUpSquares();
  reset();
}

function setUpModeButtons() {
  for (let i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener('click', function () {
      modeButtons[0].classList.remove('selectedBtn');
      modeButtons[1].classList.remove('selectedBtn');
      this.classList.add('selectedBtn');
      this.textContent === 'Easy'
        ? (numberOfSquares = 3)
        : (numberOfSquares = 6);

      reset();
    });
  }
}

function setUpSquares() {
  for (let i = 0; i < squares.length; i++) {
    // Listeners
    squares[i].addEventListener('click', function () {
      // Grab color of the clicked square
      let clickedColor = this.style.backgroundColor;
      //Compare color to pickedColor
      if (clickedColor === pickedColor) {
        messageDisplay.textContent = 'Correct!';
        resetButton.textContent = 'Play Again?';
        changeColors(clickedColor);
        h1.style.background = clickedColor;
      } else {
        this.style.backgroundColor = 'rgb(36, 36, 36)';
        messageDisplay.textContent = 'Try again';
      }
    });
  }
}

function reset() {
  colors = generateRandomColors(numberOfSquares);
  // Pick a new random color from array
  pickedColor = pickColor();
  // Change color display to match picked color
  rgbDisplay.textContent = pickedColor;
  resetButton.textContent = 'New Colors';
  messageDisplay.textContent = '';
  // Change colors of squares
  for (let i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.display = 'block';
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = 'none';
    }
  }
  h1.style.background = 'rgb(19, 112, 206)';
}

resetButton.addEventListener('click', function () {
  reset();
});

// Add initial colors

function changeColors(color) {
  // Loop through all squares
  for (let i = 0; i < squares.length; i++) {
    // Change each color to match given correct color
    squares[i].style.backgroundColor = color;
  }
}

function pickColor() {
  let random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  // Make an array
  let arr = [];
  // Add num random colors to arr
  for (let i = 0; i < num; i++) {
    // Get random color and push into arr
    arr.push(randomColor());
  }
  // Return that array
  return arr;
}

function randomColor() {
  // Pick a 'red' from 0 to 255
  let r = Math.floor(Math.random() * 256);
  // Pick a 'green' from 0 to 255
  let g = Math.floor(Math.random() * 256);
  // Pick a 'blue' from 0 to 255
  let b = Math.floor(Math.random() * 256);
  return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}
