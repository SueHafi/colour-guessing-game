let colourNum = "";
let winningBlockNum = 0;
colourChange();

//handle how to reset winning and losing blocks change visibility back

const colourContainerDiv = document.querySelector(
  '[data-id="colour-container"]'
);
colourContainerDiv.addEventListener("click", handleBlockClicked);

function handleBlockClicked(event) {
  if (event.target === colourContainerDiv.children[winningBlockNum]) {
    for (let i = 0; i < 6; i++) {
      document.querySelector(`[data-id="colour-${i}"]`).style.backgroundColor =
        colourNum;
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
  document.querySelector('[data-id="colour-3"]').style.display = "none";
  document.querySelector('[data-id="colour-4"]').style.display = "none";
  document.querySelector('[data-id="colour-5"]').style.display = "none";
}

//switching to hard mode
document
  .querySelector('[data-id="hard-mode"]')
  .addEventListener("click", switchToHardMode);

function switchToHardMode() {
  document.querySelector('[data-id="colour-3"]').style.display = "block";
  document.querySelector('[data-id="colour-4"]').style.display = "block";
  document.querySelector('[data-id="colour-5"]').style.display = "block";
}

//clicking reset button
document
  .querySelector('[data-id="reset-button"]')
  .addEventListener("click", resetButtonClick);

function resetButtonClick() {
  return colourChange();
}

//randomize winning block
function colourChange() {
  winningNum();
  calculatewinningBlock();
  document.querySelector(
    `[data-id="colour-${winningBlockNum}"]`
  ).style.backgroundColor = colourNum;
  for (let i = 0; i < 6; i++) {
    if (i === winningBlockNum) {
      continue;
    } else {
      document.querySelector(`[data-id="colour-${i}"]`).style.backgroundColor =
        returnRandomColour();
    }
  }
}

function calculatewinningBlock() {
  winningBlockNum = Math.trunc(Math.random() * 6);
  return winningBlockNum;
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
