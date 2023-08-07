let colourNum = "";
let winningBlockNum = 0;
let hasWon = false;
let easyMode = false;
let hardMode = true;
colourChange();

//the text for newcolours should change to "play again" when player has won
const colourContainerDiv = document.querySelector(
  '[data-id="colour-container"]'
);
colourContainerDiv.addEventListener("click", handleBlockClicked);

function handleBlockClicked(event) {
  if (hasWon) {
    return;
  }
  if (event.target === colourContainerDiv.children[winningBlockNum]) {
    for (let i = 0; i < 6; i++) {
      document.querySelector(`[data-id="colour-${i}"]`).style.visibility =
        "visible";
      document.querySelector(`[data-id="colour-${i}"]`).style.backgroundColor =
        colourNum;
      hasWon = true;
      resetButton.textContent = 'Play Again?';
    }
  } else {
    event.target.style.visibility = "hidden";
  }
}

//switching to easy mode
document
  .querySelector('[data-id="easy-mode"]')
  .addEventListener("click", switchToEasyMode);

function switchToEasyMode() {
  hasWon = false;
  hardMode = false;
  easyMode = true;
  colourChange();
  document.querySelector('[data-id="colour-3"]').style.display = "none";
  document.querySelector('[data-id="colour-4"]').style.display = "none";
  document.querySelector('[data-id="colour-5"]').style.display = "none";
}

//switching to hard mode
document
  .querySelector('[data-id="hard-mode"]')
  .addEventListener("click", switchToHardMode);

function switchToHardMode() {
  hasWon = false;
  easyMode = false;
  hardMode = true;
  colourChange();
  document.querySelector('[data-id="colour-3"]').style.display = "block";
  document.querySelector('[data-id="colour-4"]').style.display = "block";
  document.querySelector('[data-id="colour-5"]').style.display = "block";
}

//clicking reset button
const resetButton = document
  .querySelector('[data-id="reset-button"]');
  resetButton.addEventListener("click", resetButtonClick);

function resetButtonClick() {
  hasWon = false;
  resetButton.textContent = 'New Colours';
  for (let i = 0; i < 6; i++) {
    document.querySelector(`[data-id="colour-${i}"]`).style.visibility =
      "visible";
  }
  return colourChange();
}

//randomize winning block
function colourChange() {
  winningNum();
  calculatewinningBlock();
  if (hardMode) {
    document.querySelector(
      `[data-id="colour-${winningBlockNum}"]`
    ).style.backgroundColor = colourNum;
    for (let i = 0; i < 6; i++) {
      if (i === winningBlockNum) {
        continue;
      } else {
        document.querySelector(
          `[data-id="colour-${i}"]`
        ).style.backgroundColor = returnRandomColour();
      }
    }
  } else if (easyMode) {
    document.querySelector(
      `[data-id="colour-${winningBlockNum}"]`
    ).style.backgroundColor = colourNum;
    for (let i = 0; i < 3; i++) {
      if (i === winningBlockNum) {
        continue;
      } else {
        document.querySelector(
          `[data-id="colour-${i}"]`
        ).style.backgroundColor = returnRandomColour();
      }
    }
  }
}

function calculatewinningBlock() {
  if(easyMode) {
  winningBlockNum = Math.trunc(Math.random() * 3);
} else {
  winningBlockNum = Math.trunc(Math.random() * 6);
  return winningBlockNum;
}
}

function winningNum() {
  const randomNum = [];
  for (let i = 0; i < 3; i++) {
    randomNum.push(Math.floor(Math.random() * 256));
  }
  const result = `RGB(${randomNum.join(",")})`;
  colourNum = result;
  document.querySelector('[data-id="RBG-Number"]').textContent = colourNum;
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

//handle win and loss blocks
//remember you do not need to randomize all of them only swapping
//the winning square with one other square placement is enough
