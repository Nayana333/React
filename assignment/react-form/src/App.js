import {useState,useEffect} from 'react'
import './App.css';


function App() {
  const[data,setData]=useState('')

  let handleSUbmit=(event)=>{
    event.preventDefault()
  };
  let handleChange=(event)=>{
    setData(event.target.value)
   
  }

  useEffect(()=>{
    console.log('value Changed:',data);
   }, [data]);
  
  return (
    <div className="App">
      <div className="App">
        <form onSubmit={handleSUbmit}>
      <label >Enter your Name:</label>
      <br />
      <input type="text" name="name"  onChange={handleChange}/>
      <br />
      <input type="submit" value="Submit" />
      </form>
    </div>
    </div>
  );
}

export default App;



