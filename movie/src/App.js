import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((prev)=>{
    return prev + 1
  })
  console.log('계속 렌더합니다');
  // 데이터를 한번만 실행하게 만들어 줌
  const iRunOnlyOnce = () =>{
    console.log("힌번만 실행합니다");
  }
  useEffect(iRunOnlyOnce, []);
  return (
    <div className="App">
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
