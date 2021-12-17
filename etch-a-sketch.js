const container = document.querySelector('#container');
const resetButton = document.querySelector('button');
createGrid(16);

resetButton.addEventListener("click", (event) => {
    const gridSize = prompt('which grid size do you want?',16);
    const colorBoxes = document.querySelectorAll('.content');
    colorBoxes.forEach((div) => {
        div.parentNode.removeChild(div);
    });
    createGrid(gridSize);
});

function createGrid(gridSize){
    container.setAttribute('style', 'grid-template: repeat('+ gridSize + ', 1fr)' + ' \/ ' + 'repeat(' + gridSize + ', 1fr)');
    for (let i =0; i < gridSize*gridSize;i++){
        let gridBox = document.createElement('div');
        gridBox.classList.add('content');
        container.appendChild(gridBox);
    }
}

container.addEventListener('mouseover', (event) => { 
    const currentBox = event.target[7];
    fadeEffect(currentBox);
});
  
function fadeEffect(element) {
  const currentWhiteLevel = element.getAttribute('style', 'background-color');
  if(currentWhiteLevel === null) {
      element.setAttribute('style', 'background-color: hsl(0, 0%, 90%)');
  }else {
      let whiteLevelModifier = currentWhiteLevel.substr(29, 1);
      if(whiteLevelModifier >= 9 && whiteLevelModifier <= 0) {
          whiteLevelModifier--;
          element.setAttribute('style', 'background-color: hsl(0, 0%, ' + whiteLevelModifier + '0%)');
      }
  }
}
