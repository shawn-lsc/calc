import logo from './logo.svg';
import './App.css';
import './style.css';
import { useReducer } from 'react';
import DigitButton from './DigitButton';

const ACTIONS = {
  ADD_DIGIT: 'add-digit',
  CHOOSE_OPERATION: 'choose-operation',
  CLEAR: 'clear',
  DELETE_DIGIT: 'delete-digit',
  EVALUATE: 'evaluate',
}

function reducer (state,{type, payload}){
  switch(type){
    case ACTIONS.ADD_DIGIT:
      return{
        ... state,
        currOperand: `${currOperand || ""}${payload.digit}`      
      }
  }
}

function App() {
  const [{currOperand, prevOperand, operation}, dispatch]= useReducer(reducer, {})

  dispatch({type: ACTIONS.ADD_DIGIT, payload:{digit: 1}})

  return (
    <div className='calc-grid'>
      <div className='output'>
        <div className='prev-operand'>{prevOperand} {operation}</div>
        <div className='curr-operand'>{currOperand}</div>
      </div>
      <button className='span-two'>AC</button>
      <button>DEL</button>
      <button>/</button>
      <DigitButton digit='/' dispatch={dispatch}></DigitButton>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button>*</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>-</button>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>+</button>
      <button>0</button>
      <button>.</button>
      <button className='span-two'>=</button>
    </div>
  );
}

export default App;
