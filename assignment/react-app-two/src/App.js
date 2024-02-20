
import { useState } from 'react';
import './App.css';
import Counter from './counter'

function App() {
  const [count,setCount]=useState(0)
  let addCount=()=>{
    setCount(count+1)
  }
  let removeCount=()=>{
    setCount(count-1)
  }
  return (
   
    <div className="App">
      
      <button className='button-container' onClick={addCount}>+</button>
      <button onClick={removeCount}>-</button>
      
      <Counter count={count}/>
      
    </div>
  );
}

export default App;
