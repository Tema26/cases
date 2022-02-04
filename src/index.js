const inputWord = document.querySelector('.input_word')
const lastLetterInWord = inputWord.value
const modifiedNoun = document.querySelector('.result')
let possibleEndingThisCase = ['а']

// Родительный падеж
const btnGenetive = document.querySelector('.btn_genitive')
btnGenetive.addEventListener('click', () => {
    if (lastLetterInWord.slice(-1) == possibleEndingThisCase) {
        const changeNoun = lastLetterInWord.replace(/.$/, 'и')
        modifiedNoun.insertAdjacentHTML("afterend", changeNoun )
    } 
    
})

// Дательный падеж
const btnDative = document.querySelector('.btn_dative')
btnDative.addEventListener('click', () => {
    if (lastLetterInWord.slice(-1) == possibleEndingThisCase) {
        const changeNoun = lastLetterInWord.replace(/.$/, 'е')
        modifiedNoun.insertAdjacentHTML("afterend", changeNoun )
    } 

})

// Винительный падеж
const btnАccusative = document.querySelector('.btn_accusative')
btnАccusative.addEventListener('click', () => {
    if (lastLetterInWord.slice(-1) == possibleEndingThisCase) {
        const changeNoun = lastLetterInWord.replace(/.$/, 'у')
        modifiedNoun.insertAdjacentHTML("afterend", changeNoun )
    } 

})

// Творительный падеж
const btnInstrumental = document.querySelector('.btn_instrumental')
btnInstrumental.addEventListener('click', () => {
    if (lastLetterInWord.slice(-1) == possibleEndingThisCase) {
        const changeNoun = lastLetterInWord.replace(/.$/, 'ой')
        modifiedNoun.insertAdjacentHTML("afterend", changeNoun )
    } 

})

// Предложный падеж
const btnPrepositional = document.querySelector('.btn_prepositional')
btnPrepositional.addEventListener('click', () => {
    if (lastLetterInWord.slice(-1) == possibleEndingThisCase) {
        const changeNoun = lastLetterInWord.replace('', 'о ').replace(/.$/, 'е');
        modifiedNoun.insertAdjacentHTML("afterend", changeNoun )
}
})

// const result = document.querySelector('.result')
// result.innerHTML += i

