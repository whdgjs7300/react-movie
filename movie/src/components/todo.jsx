import { useState } from "react";

const Todo = () => {
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
        <div>
            <h1>My toDos {toDos.length}</h1>
        <form onSubmit={onSubmit}>
        <input value={toDo} type="text" placeholder="할일을 입력하세요" onChange={onChange}/>
            <button type="">할일을 추가함</button>
        </form>
        <hr/>
        {
            toDos.map((item, i)=>{
            return <li key={item}>{item}</li>
            })
        }
        </div>
    );
}

export default Todo;