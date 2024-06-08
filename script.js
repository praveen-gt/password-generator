const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];
// const length = 12;

let generateButton = document.getElementById('generate-button')
let outputOne = document.getElementById('output-one')
let outputTwo = document.getElementById('output-two')
let myInput = document.getElementById('myInput')

let isLength = true

generateButton.addEventListener('click', function () {
    myInput.value < 16 ? isLength = true : isLength = false
    if (isLength) {
        const randomIndex = () => Math.floor(Math.random() * 91)
        let resultOne = ''
        let resultTwo = ''
        for (let index = 0; index < myInput.value; index++) {
            resultOne += characters[randomIndex()]
            resultTwo += characters[randomIndex()]

        }
        outputOne.textContent = resultOne
        outputTwo.textContent = resultTwo
    }
    else {

        let resultOne = ''
        let resultTwo = ''
        outputOne.textContent = resultOne
        outputTwo.textContent = resultTwo
        alert('Please enter value upto 15')
    }
})

outputOne.addEventListener('click', () => {
    let copyText = outputOne.textContent;
    navigator.clipboard.writeText(copyText)
    alert('text copied')
})
outputTwo.addEventListener('click', () => {
    let copyText = outputTwo.textContent;
    navigator.clipboard.writeText(copyText)
    alert('text copied')
})