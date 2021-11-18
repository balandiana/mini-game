const board = document.querySelector('#board')
const colors = ['#16FF30', '#4CFF30', '#6EFF30', '#90FF30', '#ADFF30', '#CCFF30', '#E9FF30']
 //['#EB519C', '#CC519C', '#B3519C', '#96519C', '#6F519C', '#45519C', '#09519C']
const SQUARES_NUMBER = 600

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => 
    setColor(square))

    square.addEventListener('mouseleave', () => 
    removeColor(square))

    board.append(square)
}

function setColor(element) {
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
    element.style.backgroundColor = '#041304'
    element.style.boxShadow = `0 0 2px #031A02`
}

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}