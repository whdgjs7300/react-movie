import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (e)=> {
    setToDo(e.target.value);
  }
  const onSubmit = (e) => {
    e.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDo("");
    setToDos(currentArray => [toDo, ...currentArray])
  }
  console.log(toDos);

  return (
    <div className="App">
      <h1>My toDos {toDos.length}</h1>
      <form onSubmit={onSubmit}>
      <input value={toDo} type="text" placeholder="할일을 입력하세요" onChange={onChange}/>
        <button type="">할일을 추가함</button>
      </form>
      <hr/>
      {
        toDos.map((item)=>{
          return <li key={item}>{item}</li>
        })
      }
    </div>
  );
}

export default App;
