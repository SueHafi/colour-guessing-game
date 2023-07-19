let colourNum = returnRandomColour();
console.log(colourNum);
setColourForBlocks();

//switching to easy mode
// document.querySelector(".easyMode").addEventListener("click", switchToEasyMode);

// function switchToEasyMode() {
//   document.querySelector(".colour4").style.display = "none";
//   document.querySelector(".colour5").style.display = "none";
//   document.querySelector(".colour6").style.display = "none";
// }

//switching to hard mode
// document.querySelector(".hardMode").addEventListener("click", switchToHardMode);

// function switchToHardMode() {
//   document.querySelector(".colour4").style.display = "block";
//   document.querySelector(".colour5").style.display = "block";
//   document.querySelector(".colour6").style.display = "block";
// }

// clicking reset button
document
  .querySelector(".resetButton")
  .addEventListener("click", resetButtonClick);

function resetButtonClick() {
  return setColourForBlocks();
}

function setColourForBlocks() {
colourNum = returnRandomColour();
const winningBlockNumber = Math.trunc(Math.random()*6+1);
console.log(winningBlockNumber);
document.querySelector(".RGBNumber").textContent = colourNum;
document.querySelector(`.colour${winningBlockNumber}`).style.backgroundColor = colourNum;
  for(let i = 1; i <= 6; i++) {
    if(i === winningBlockNumber) {
      continue;
    } else {
      document.querySelector(`.colour${i}`).style.backgroundColor=returnRandomColour();
    }
  }

}


function returnRandomColour() {
  const randomNumbers = [];
  for (let i = 0; i < 3; i++) {
    randomNumbers.push(Math.floor(Math.random() * 256));
  }
  const result = `RGB(${randomNumbers.join(",")})`;
  return result;
}

// handle switching to easymode and hardmode again for new code logic
//make sure to implement wrong and correct guesses (winning-losing clicks, guesses)
