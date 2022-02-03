const inputWord = document.querySelector('.input_word')
const i = inputWord.value

// Родительный падеж
const btnGenetive = document.querySelector('.btn_genitive')
const resultGenitiveCase = btnGenetive.addEventListener('click', () => {

    if (i.slice(-1) == 'а') {
        const res = i.replace(/.$/, 'и')
        alert(res);
    } 
    
})

// Дательный падеж
const btnDative = document.querySelector('.btn_dative')
const resultDativeCase = btnDative.addEventListener('click', () => {
    if (i.slice(-1) == 'а') {
        const res = i.replace(/.$/, 'е')
        alert(res);
    } 

})

// Винительный падеж
const btnАccusative = document.querySelector('.btn_accusative')
const resultAccusativeCase = btnАccusative.addEventListener('click', () => {
    if (i.slice(-1) == 'а') {
        const res = i.replace(/.$/, 'у')
        alert(res);
    } 

})

// Творительный падеж
const btnInstrumental = document.querySelector('.btn_instrumental')
const resultInstrumentalCase = btnInstrumental.addEventListener('click', () => {
    if (i.slice(-1) == 'а') {
        const res = i.replace(/.$/, 'ой')
        alert(res);
    } 

})

// Предложный падеж
const btnPrepositional = document.querySelector('.btn_prepositional')
const resultPrepositionalCase = btnPrepositional.addEventListener('click', () => {
    if (i.slice(-1) == 'а') {
        const res = i.replace('', 'о ').replace(/.$/, 'е');
        alert(res);
}
})

