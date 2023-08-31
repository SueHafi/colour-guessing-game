let colourNum = "";
let winningBlockNum = 0;
let hasWon = false;
let isHardMode = true;
let blockCount = 6;
const RGBNum = document.querySelector('[data-id="RBG-Number"]');
const colourContainerDiv = document.querySelector(
  '[data-id="colour-container"]'
);
const arrayOfBlockColours = colourContainerDiv.children;
const easyModeBtn = document.querySelector('[data-id="easy-mode"]');
const hardModeBtn = document.querySelector('[data-id="hard-mode"]');
const resetButton = document.querySelector('[data-id="reset-button"]');

colourContainerDiv.addEventListener("click", handleBlockClicked);
hardModeBtn.addEventListener("click", switchToHardMode);
easyModeBtn.addEventListener("click", switchToEasyMode);
resetButton.addEventListener("click", startNewGame);

startNewGame();

function handleBlockClicked(event) {
  if (hasWon) {
    return;
  }
  if (event.target === colourContainerDiv.children[winningBlockNum]) {
    for (let i = 0; i < blockCount; i++) {
      arrayOfBlockColours[i].style.visibility = "visible";
      arrayOfBlockColours[i].style.backgroundColor = colourNum;
      hasWon = true;
      resetButton.textContent = "Play Again?";
    }
  } else {
    event.target.style.visibility = "hidden";
  }
}

function switchToEasyMode() {
  isHardMode = false;
  blockCount = 3;
  arrayOfBlockColours[3].style.display = "none";
  arrayOfBlockColours[4].style.display = "none";
  arrayOfBlockColours[5].style.display = "none";

  startNewGame();
}

function switchToHardMode() {
  isHardMode = true;
  blockCount = 6;
  arrayOfBlockColours[3].style.display = "block";
  arrayOfBlockColours[4].style.display = "block";
  arrayOfBlockColours[5].style.display = "block";

  startNewGame();
}

function startNewGame() {
  hasWon = false;
  resetButton.textContent = "New Colours";
  for (let i = 0; i < 6; i++) {
    arrayOfBlockColours[i].style.visibility = "visible";
  }

  winningNum();
  calculatewinningBlock();
  arrayOfBlockColours[winningBlockNum].style.backgroundColor = colourNum;
  for (let i = 0; i < blockCount; i++) {
    if (i !== winningBlockNum) {
      arrayOfBlockColours[i].style.backgroundColor = returnRandomColour();
    }
  }
}

function calculatewinningBlock() {
  winningBlockNum = Math.trunc(Math.random() * blockCount);
}

function winningNum() {
  colourNum = returnRandomColour();
  RGBNum.textContent = colourNum;
}

function returnRandomColour() {
  const randomNumbers = [];
  for (let i = 0; i < 3; i++) {
    randomNumbers.push(Math.floor(Math.random() * 256));
  }
  const result = `RGB(${randomNumbers.join(",")})`;

  return result;
}
