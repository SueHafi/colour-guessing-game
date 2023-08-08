let colourNum = "";
let winningBlockNum = 0;
let hasWon = false;
let isHardMode = true;
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
resetButton.addEventListener("click", resetButtonClick);

colourChange();

function handleBlockClicked(event) {
  if (hasWon) {
    return;
  }
  if (event.target === colourContainerDiv.children[winningBlockNum]) {
    for (let i = 0; i < 6; i++) {
      arrayOfBlockColours[i].style.visibility = "visible";
      arrayOfBlockColours[i].style.backgroundColor = colourNum;
      hasWon = true;
      resetButton.textContent = "Play Again?";
    }
  } else {
    event.target.style.visibility = "hidden";
  }
}

//switching to easy mode

function switchToEasyMode() {
  resetButton.textContent = "New Colours";
  hasWon = false;
  isHardMode = false;
  colourChange();
  arrayOfBlockColours[3].style.display = "none";
  arrayOfBlockColours[4].style.display = "none";
  arrayOfBlockColours[5].style.display = "none";
}

//switching to hard mode

function switchToHardMode() {
  resetButton.textContent = "New Colours";
  hasWon = false;
  isHardMode = true;
  colourChange();
  arrayOfBlockColours[3].style.display = "block";
  arrayOfBlockColours[4].style.display = "block";
  arrayOfBlockColours[5].style.display = "block";
}

//clicking reset button

function resetButtonClick() {
  hasWon = false;
  resetButton.textContent = "New Colours";
  for (let i = 0; i < 6; i++) {
    arrayOfBlockColours[i].style.visibility = "visible";
  }
  return colourChange();
}

//randomize winning block
function colourChange() {
  winningNum();
  calculatewinningBlock();
  if (isHardMode) {
    arrayOfBlockColours[winningBlockNum].style.backgroundColor = colourNum;
    for (let i = 0; i < 6; i++) {
      if (i !== winningBlockNum) {
        arrayOfBlockColours[i].style.backgroundColor = returnRandomColour();
      }
    }
  } else {
    arrayOfBlockColours[winningBlockNum].style.backgroundColor = colourNum;
    for (let i = 0; i < 3; i++) {
      if (i !== winningBlockNum) {
        arrayOfBlockColours[i].style.backgroundColor = returnRandomColour();
      }
    }
  }
}

function calculatewinningBlock() {
  if (isHardMode) {
    winningBlockNum = Math.trunc(Math.random() * 6);
    return winningBlockNum;
  } else {
    winningBlockNum = Math.trunc(Math.random() * 3);
  }
}

function winningNum() {
  const randomNum = [];
  for (let i = 0; i < 3; i++) {
    randomNum.push(Math.floor(Math.random() * 256));
  }
  const result = `RGB(${randomNum.join(",")})`;
  colourNum = result;
  RGBNum.textContent = colourNum;
  return result;
}

function returnRandomColour() {
  const randomNumbers = [];
  for (let i = 0; i < 3; i++) {
    randomNumbers.push(Math.floor(Math.random() * 256));
  }
  const result = `RGB(${randomNumbers.join(",")})`;
  return result;
}
