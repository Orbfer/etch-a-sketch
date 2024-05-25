let btnAdjustSize = document.querySelector('.adjust-size')
let a = false
let userInput = document.querySelector('input')
const body = document.querySelector('body')
const gridTable = document.querySelector('.container-grids')
body.addEventListener('mousedown', () => {
    a = true
})
body.addEventListener('mouseup', () => {
    a = false
})
function makeGrid(gridValue) {
    for (let i = 0; i < gridValue; i++) {
        for (let j = 0; j < gridValue; j++) {
            let squere = document.createElement('div')
            let heightAndWidth = 500 / gridValue
            squere.classList.add('squere')
            squere.style.height = `${heightAndWidth}px`
            squere.style.width = `${heightAndWidth}px`
            gridTable.append(squere)
            squere.addEventListener("mouseover", () => {
                if(a == true)
                squere.style.backgroundColor = 'black'
            })
            squere.addEventListener("mousedown", () => {
                squere.style.backgroundColor = 'black'
            })
        }
    }
}
btnAdjustSize.addEventListener('click', () => {
    if (userInput.value > 100 || userInput.value < 2)
        alert('pick a number between 100 and 2')
    else
    {
        while (gridTable.firstChild)
            gridTable.removeChild(gridTable.firstChild)
        makeGrid(userInput.value)
    }
})
makeGrid(16)
