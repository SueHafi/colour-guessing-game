
let colourNum = '';
colourChange();

//switching to easy mode
document.querySelector('.easyMode').addEventListener('click', switchToEasyMode);

function switchToEasyMode() {
    document.querySelector('.colour4').style.display = 'none';
    document.querySelector('.colour5').style.display = 'none';
    document.querySelector('.colour6').style.display = 'none';
}

//switching to hard mode
document.querySelector('.hardMode').addEventListener('click', switchToHardMode);

function switchToHardMode() {
    document.querySelector('.colour4').style.display = 'block';
    document.querySelector('.colour5').style.display = 'block';
    document.querySelector('.colour6').style.display = 'block'; 
}

//clicking reset button
document.querySelector('.resetButton').addEventListener('click', resetButtonClick);

function resetButtonClick() {
    return colourChange();
}

function colourChange() {
document.querySelector('.colour1').style.backgroundColor = returnRandomColour();
document.querySelector('.colour2').style.backgroundColor = returnRandomColour();
document.querySelector('.colour3').style.backgroundColor = returnRandomColour();
document.querySelector('.colour4').style.backgroundColor = returnRandomColour();
document.querySelector('.colour5').style.backgroundColor = returnRandomColour();
document.querySelector('.colour6').style.backgroundColor = returnRandomColour();
}

function returnRandomColour() {
    const randomNumbers = [];
    for(let i = 0; i < 3; i++) {
        randomNumbers.push(Math.floor(Math.random()*256));
    }
    const result = `RGB(${randomNumbers.join(',')})`;
    colourNum = result;
    return result;
}
document.querySelector('.RGBNumber').textContent = colourNum;


//find a way to randomize where the winning square colour is displayed
//make sure to implement wrong and correct guesses (winning-losing clicks, guesses)



