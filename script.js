let colourNum = "";
colourChange();

//switching to easy mode
document.querySelector(".easyMode").addEventListener("click", switchToEasyMode);

function switchToEasyMode() {
  document.querySelector(".colour4").style.display = "none";
  document.querySelector(".colour5").style.display = "none";
  document.querySelector(".colour6").style.display = "none";
}

//switching to hard mode
document.querySelector(".hardMode").addEventListener("click", switchToHardMode);

function switchToHardMode() {
  document.querySelector(".colour4").style.display = "block";
  document.querySelector(".colour5").style.display = "block";
  document.querySelector(".colour6").style.display = "block";
}

//clicking reset button
document
  .querySelector(".resetButton")
  .addEventListener("click", resetButtonClick);

function resetButtonClick() {
  return colourChange();
}

function colourChange() {
  document.querySelector(".colour1").style.backgroundColor =
    returnRandomColour();
  document.querySelector(".colour2").style.backgroundColor =
    returnRandomColour();
  document.querySelector(".colour3").style.backgroundColor =
    returnRandomColour();
  document.querySelector(".colour4").style.backgroundColor =
    returnRandomColour();
  document.querySelector(".colour5").style.backgroundColor =
    returnRandomColour();
  document.querySelector(".colour6").style.backgroundColor =
    returnRandomColour();
}

function returnRandomColour() {
  const randomNumbers = [];
  for (let i = 0; i < 3; i++) {
    randomNumbers.push(Math.floor(Math.random() * 256));
  }
  const result = `RGB(${randomNumbers.join(",")})`;
  colourNum = result;
  document.querySelector(".RGBNumber").textContent = colourNum;
  return result;
}


// continue working on this tomorrow
// https://www.quora.com/How-do-you-randomize-the-position-of-divs-JavaScript-arrays-sorting-random-and-development
//use above url for source on how to randomize the divs
function randomizeColours() {
  // using fisher gates shuffle method
  // const shuffleArray = array => {
  //     for (let i = array.length - 1; i > 0; i--) {
  //       const j = Math.floor(Math.random() * (i + 1));
  //       const temp = array[i];
  //       array[i] = array[j];
  //       array[j] = temp;
  //     }
  //   }
}

//find a way to randomize where the winning square colour is displayed
//remember you do not need to randomize all of them only swapping
//the winning square with one other square placement is enough
//make sure to implement wrong and correct guesses (winning-losing clicks, guesses)
