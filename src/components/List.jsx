import React, {useContext} from "react";
import ListItem from "./ListItem";
import {DataContext} from "./DataProvider";

function List(){
    const [todos, setTodos] = useContext(DataContext);

const switchComplete = (id) => {
// alert(id)
    const newTodos = [...todos];
    // eslint-disable-next-line array-callback-return
    newTodos.filter((todo,index) => {
        if(index===id) {
            todo.complete = !todo.complete;
        }
        setTodos(newTodos);
    })
}

    const handleOnEditTodos = (editValue,id) => {
        const newTodos = [...todos];
        // eslint-disable-next-line array-callback-return
        newTodos.filter((todo,index) => {
            if(index===id) {
                todo.name = editValue;
            }
            setTodos(newTodos);
        })
    }

    return(
        <ul>
            {todos.map((todo, index)=>
           <ListItem
               todo={todo}
               key={index}
               id={index}
               checkComplete={switchComplete}
               handleOnEditTodos={handleOnEditTodos}
           />
            )}
        </ul>
    )
}
export default List;