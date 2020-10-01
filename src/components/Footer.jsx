import React,{useState, useContext} from "react";
import {DataContext} from "./DataProvider";

function Footer(){
    const [checkAll, setCheckAll] =useState(false);
const [todos,setTodos]=useContext(DataContext);

const handleCheckAll = () => {
    const newTodos = [...todos];
    // eslint-disable-next-line array-callback-return
    newTodos.filter((todo) => {
todo.complete = !checkAll;
    })
        setTodos(newTodos);
    setCheckAll(!checkAll)
}

const newTodosComplete = () => {
 return todos.filter(todo => todo.complete === false);
}

const deleteTodo = () => {
    setTodos(newTodosComplete());
    setCheckAll(false)
}

    return(
        <>
            {
                todos.length === 0 ? <h2>You can create todo list!</h2>
                    :
                <div className="row">
                    <label htmlFor="All">
                        <input type="checkbox" name="all" id="all"
                               onChange={handleCheckAll} checked={checkAll}/>
                        All
                    </label>
                    <p>You have {newTodosComplete().length} todo</p>
                    <button id="delete"
                            onClick={deleteTodo}>
                        Delete</button>
                </div>
            }
        </>
    )
}
export default Footer;