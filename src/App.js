import logo from './logo.svg';
import './App.css';
import { useDispatch,useSelector } from 'react-redux';
import { increment,decrement,demoapp } from './App/Counterslice';
import { useState } from 'react';

function App() {
  const[inputval,setinput]=useState('')
  const count = useSelector((state)=>state.counter.value);
  const dispatch=useDispatch()
  
  return (
    <div className="App">
      <input type='text' onChange={(e)=>setinput(e.target.value)}></input>
      <h1> conter:{count}</h1>
      <button  onClick={()=>dispatch(increment())}>increment</button>
      <button onClick={()=>dispatch(decrement())}>decrement</button>
      <button onClick={()=>dispatch(demoapp())}>increment by 5</button>

   </div>
  );
}

export default App;
