const inputWord = document.querySelector('.input_word')
const lastLetterInWord = inputWord.value
const result = document.querySelector('.result')

// Родительный падеж
const btnGenetive = document.querySelector('.btn_genitive')
const resultGenitiveCase = btnGenetive.addEventListener('click', () => {

    if (lastLetterInWord.slice(-1) == 'а') {
        const res = lastLetterInWord.replace(/.$/, 'и')
        result.innerHTML += res
    } 
    
})

// Дательный падеж
const btnDative = document.querySelector('.btn_dative')
const resultDativeCase = btnDative.addEventListener('click', () => {
    if (lastLetterInWord.slice(-1) == 'а') {
        const res = lastLetterInWord.replace(/.$/, 'е')
        result.innerHTML += res
    } 

})

// Винительный падеж
const btnАccusative = document.querySelector('.btn_accusative')
const resultAccusativeCase = btnАccusative.addEventListener('click', () => {
    if (lastLetterInWord.slice(-1) == 'а') {
        const res = lastLetterInWord.replace(/.$/, 'у')
        result.innerHTML += res
    } 

})

// Творительный падеж
const btnInstrumental = document.querySelector('.btn_instrumental')
const resultInstrumentalCase = btnInstrumental.addEventListener('click', () => {
    if (lastLetterInWord.slice(-1) == 'а') {
        const res = lastLetterInWord.replace(/.$/, 'ой')
        result.innerHTML += res
    } 

})

// Предложный падеж
const btnPrepositional = document.querySelector('.btn_prepositional')
const resultPrepositionalCase = btnPrepositional.addEventListener('click', () => {
    if (lastLetterInWord.slice(-1) == 'а') {
        const res = lastLetterInWord.replace('', 'о ').replace(/.$/, 'е');
        result.innerHTML += res
}
})

// const result = document.querySelector('.result')
// result.innerHTML += i

