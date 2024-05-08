const squaresArray = []
var square

for (let i = 0; i < 81; i++){
    square = document.getElementsByClassName('square-in')[i].innerHTML
    squaresArray.push(square)
}

console.log(squaresArray)

squaresArray.forEach((_, index) => {
    squaresArray[index] = Math.floor(Math.random() * 10)
})

console.log(squaresArray)

for (let i = 0; i < 81; i++){
    document.getElementsByClassName('square-in')[i].innerHTML = squaresArray[i]
}

const newSquaresArray = squaresArray.map(macaco => {
    macaco = Math.floor(Math.random() * 10)
    
    return macaco
})

//console.log(newSquaresArray)
