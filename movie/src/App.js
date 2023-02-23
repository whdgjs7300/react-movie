import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((prev)=>{
    return prev + 1
  })
  return (
    <div className="App">
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
