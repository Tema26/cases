import {useState} from 'react';
import './App.css';

function App() {
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');
  
  //  Родительный падеж

  const createGenitive = () => {
    if (['а'].includes(value.slice(-1))) {
      const changeNoun = value.replace(/.$/, 'и')
      setResult(changeNoun)
    } 
  }

   // Дательный падеж
   const createDative = () => {
    if (['а'].includes(value.slice(-1))) {
      const changeNoun = value.replace(/.$/, 'е')
      setResult(changeNoun)
    } 
  }
  // Винительный падеж
  const createАccusative = () => {
    if (['а'].includes(value.slice(-1))) {
      const changeNoun = value.replace(/.$/, 'у')
      setResult(changeNoun)
    } 
  }

  // Творительный падеж
  const createInstrumental = () => {
    if (['а'].includes(value.slice(-1))) {
      const changeNoun = value.replace(/.$/, 'ой')
      setResult(changeNoun)
    } 
  }
  // Предложный падеж
  const createPrepositional = () => {
    if (['а'].includes(value.slice(-1))) {
      const changeNoun = value.replace('', 'о ').replace(/.$/, 'е')
      setResult(changeNoun)
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
