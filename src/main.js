import "./styles/style.scss";
let colourNum = "";
let winningBlockNum = 0;
let hasWon = false;
let isHardMode = true;
let blockCount = 6;
const RGBNum = document.querySelector('[data-id="RBG-Number"]');
const colourContainerDiv = document.querySelector(
  '[data-id="colour-container"]'
);
const header = document.querySelector('[data-id = "header"]');
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
      header.style.backgroundColor = `${colourNum}`;
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
  toggleDifficultySelected();
  startNewGame();
}

function switchToHardMode() {
  isHardMode = true;
  blockCount = 6;
  arrayOfBlockColours[3].style.display = "block";
  arrayOfBlockColours[4].style.display = "block";
  arrayOfBlockColours[5].style.display = "block";
  toggleDifficultySelected();
  startNewGame();
}

function toggleDifficultySelected() {
  if (isHardMode) {
    hardModeBtn.classList.add("btn--active");
    easyModeBtn.classList.remove("btn--active");
  } else {
    hardModeBtn.classList.remove("btn--active");
    easyModeBtn.classList.add("btn--active");
  }
}

function startNewGame() {
  hasWon = false;
  header.style.backgroundColor = "#aa0555";
  resetButton.textContent = "New Colours";
  for (let i = 0; i < 6; i++) {
    arrayOfBlockColours[i].style.visibility = "visible";
  }

  colourNum = returnRandomColour();
  RGBNum.textContent = colourNum;
  randomizeWinningBlockNum();
  arrayOfBlockColours[winningBlockNum].style.backgroundColor = colourNum;
  for (let i = 0; i < blockCount; i++) {
    if (i !== winningBlockNum) {
      arrayOfBlockColours[i].style.backgroundColor = returnRandomColour();
    }
  }
}

function randomizeWinningBlockNum() {
  winningBlockNum = Math.trunc(Math.random() * blockCount);
}

function returnRandomColour() {
  const randomNumbers = [];
  for (let i = 0; i < 3; i++) {
    randomNumbers.push(Math.floor(Math.random() * 256));
  }
  const result = `RGB(${randomNumbers.join(", ")})`;

  return result;
}
