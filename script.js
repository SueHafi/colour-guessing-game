let colourNum = "";
colourChange();
console.log(colourNum)

//handling winning and losing blocks

//switching to easy mode
document.querySelector('[data-id="easy-mode"]').addEventListener("click", switchToEasyMode);

function switchToEasyMode() {
  document.querySelector('[data-id="colour-3"]').style.display = "none";
  document.querySelector('[data-id="colour-4"]').style.display = "none";
  document.querySelector('[data-id="colour-5"]').style.display = "none";
}

//switching to hard mode
document.querySelector('[data-id="hard-mode"]').addEventListener("click", switchToHardMode);

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

function colourChange() {
  document.querySelector(`[data-id="colour-0"]`);
  document.querySelector('[data-id="colour-0"]').style.backgroundColor =
    returnRandomColour();
  document.querySelector('[data-id="colour-1"]').style.backgroundColor =
    returnRandomColour();
  document.querySelector('[data-id="colour-2"]').style.backgroundColor =
    returnRandomColour();
  document.querySelector('[data-id="colour-3"]').style.backgroundColor =
    returnRandomColour();
  document.querySelector('[data-id="colour-4"]').style.backgroundColor =
    returnRandomColour();
  document.querySelector('[data-id="colour-5"]').style.backgroundColor =
    returnRandomColour();
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

//randomize winning block
//handle win and loss clicks
//find a way to randomize where the winning square colour is displayed
//remember you do not need to randomize all of them only swapping
//the winning square with one other square placement is enough
//make sure to implement wrong and correct guesses (winning-losing clicks, guesses)
