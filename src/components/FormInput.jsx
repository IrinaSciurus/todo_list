import React,{useState, useContext} from "react";
import {DataContext} from "./DataProvider";

function FormInput(){
    const [todos, setTodos] = useContext(DataContext);
    const [todoName, setTodosName] = useState('');


    const addTodo = ev => {
        ev.preventDefault();
        setTodos([...todos,{name: todoName, complete: false}]);
        setTodosName('');
    }

    return (
        <form autoComplete="off" onSubmit={addTodo}>
            <input type="text"
                   name="todos"
                   required=""
                   value={todoName}
                   onChange={event => setTodosName(event.target.value.toLowerCase())} />
            <button type="submit" disabled={!todoName}>Create</button>
        </form>
    )
}
export default FormInput;