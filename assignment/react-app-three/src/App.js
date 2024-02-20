import { useState ,useEffect } from 'react';
import './App.css';

function App() {
  const [count,setCount]=useState(1)
  const [data,setData]=useState({})
const increment=()=>{
  setCount(count+1) 
}
const decrement=()=>{
  setCount(count-1)
}

useEffect(()=>{
  fetch(`https://jsonplaceholder.typicode.com/users/${count}`)
  .then(response=>response.json())
  .then(data=>setData(data))
},[count])

  return (
    <div className="App">
      <h3>{count}</h3>
      <div className='userCss'>
        <h1>{data.name}</h1>
        <h2>{data.email}</h2>
      </div>
      <button className="button-css"onClick={increment}>+</button>
      <button className="button-css" onClick={decrement}>-</button>
      
    </div>
  );
}

export default App;
