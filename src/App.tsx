import {useState} from 'react';
import './App.css';

function App() {
  const [word, setValue] = useState('');
  const [result, setResult] = useState('');
  const expectedEndings  = ['а']
  
  //  Родительный падеж

  const createGenitive = () => {
    if (expectedEndings.includes(word.slice(-1))) {
      const changeNoun = word.replace(/.$/, 'и')
      setResult(changeNoun)
    } 
  }

   // Дательный падеж
   const createDative = () => {
    if (expectedEndings.includes(word.slice(-1))) {
      const modifiedNoun = word.replace(/.$/, 'е')
      setResult(modifiedNoun)
    } 
  }
  // Винительный падеж
  const createАccusative = () => {
    if (expectedEndings.includes(word.slice(-1))) {
      const modifiedNoun = word.replace(/.$/, 'у')
      setResult(modifiedNoun)
    } 
  }

  // Творительный падеж
  const createInstrumental = () => {
    if (expectedEndings.includes(word.slice(-1))) {
      const modifiedNoun = word.replace(/.$/, 'ой')
      setResult(modifiedNoun)
    } 
  }
  // Предложный падеж
  const createPrepositional = () => {
    if (expectedEndings.includes(word.slice(-1))) {
      const setPreposition = word.replace('', 'о ') 
      const changeEnding  = setPreposition.replace(/.$/, 'е')
      setResult(changeEnding)
    } 
  }
  return (
    
    <div className="App">
      <header className="App-header">
        Склонение существительных по падежам
      </header>
      <div className="wrapper">
        <div>Введите слово: <input onChange={(e) => setValue(e.target.value)}/></div>
        <div>
          <button onClick={createGenitive}>Р.п.</button>
          <button onClick={createDative}>В.п.</button>
          <button onClick={createАccusative}>Д.п.</button>
          <button onClick={createInstrumental}>Т.п.</button>
          <button onClick={createPrepositional}>П.п.</button>
        </div>
          <div>Результат: <span>{result}</span></div>
            </div>
              </div>
  );
}

export default App;
