import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [toDo, setToDo] = useState("");
  const onChange = (e)=> {
    setToDo(e.target.value);
  }
  const onSubmit = (e) => {
    e.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDo("");
  }
  console.log(toDo);

  return (
    <div className="App">
      <form onSubmit={onSubmit}>
      <input value={toDo} type="text" placeholder="할일을 입력하세요" onChange={onChange}/>
        <button type="">할일을 추가함</button>
      </form>
      
    </div>
  );
}

export default App;
