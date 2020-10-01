import React,{useState, useContext, useEffect, useRef} from "react";
import {DataContext} from "./DataProvider";

function FormInput(){
    const [todos, setTodos] = useContext(DataContext);
    const [todoName, setTodosName] = useState('');
    const todoInput = useRef();


    const addTodo = ev => {
        ev.preventDefault();
        setTodos([...todos,{name: todoName, complete: false}]);
        setTodosName('');
        todoInput.current.focus();
    }

    useEffect(()=>{
        todoInput.current.focus();
    },[])

    return (
        <form autoComplete="off" onSubmit={addTodo}>
            <input type="text"
                   name="todos"
                   id="todos"
                   ref={todoInput}
                   required=""
                   value={todoName}
                   onChange={event => setTodosName(event.target.value.toLowerCase())} />
            <button type="submit" disabled={!todoName}>Create</button>
        </form>
    )
}
export default FormInput;