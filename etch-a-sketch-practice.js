const container = document.querySelector('#container');
const resetButton = document.querySelector('button');

resetButton.addEventListener("click", (event) => {
    let gridSize = prompt('which grid size do you want?',16);
    const colorBoxes = document.querySelectorAll('.content');
    colorBoxes.forEach((div) => {
        div.parentNode.removeChild(div);
    });
    createGrid(gridSize);
});

createGrid(16);

function createGrid(gridSize){
    container.setAttribute('style', 'grid-template: repeat('+ gridSize + ', 1fr)' + ' \/ ' + 'repeat(' + gridSize + ', 1fr)');

    for (let i =0; i < gridSize*gridSize;i++){
        let gridBox = document.createElement('div');
        gridBox.classList.add('content');
        container.appendChild(gridBox);
    }
}

function random(number) { 
    return Math.floor(Math.random() * (number + 1));
  }

container.addEventListener('mouseover', (event) => { 
    const randomColor = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    const currentBox = event.target;
    if(container.className === 'colorful') {
    currentBox.style.backgroundColor = randomColor;
    
    } else {
    fadeEffect(currentBox);
    }
  });
  
  function fadeEffect(element) {
    const currentWhiteLevel = element.getAttribute('style', 'background-color');
    
    //This sets the initial white level of each mouse-overed element
    if(currentWhiteLevel === null) {
      element.setAttribute('style', 'background-color: hsl(0, 0%, 90%)');
      
    //The whiteLevelModifier begins at 7 (70% white), and is lowered by 10% on each pass of the mouse
    } else {
      let colorMode = currentWhiteLevel.substr(18, 3);
      let whiteLevelModifier = currentWhiteLevel.substr(29, 1);
      
       //Formally colorful squares will be filled with the initial white level.
      if(colorMode === 'rgb') {
        element.setAttribute('style', 'background-color: hsl(0, 0%, 90%)');
       
      } else if(whiteLevelModifier <= 9 && whiteLevelModifier >= 0) {
         whiteLevelModifier--;
         element.setAttribute('style', 'background-color: hsl(0, 0%, ' + whiteLevelModifier + '0%)');
      }
    }
  }