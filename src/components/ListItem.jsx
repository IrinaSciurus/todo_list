import React from "react";

function ListItem({todo, id, checkComplete}){
    return(

            <li>
                <label htmlFor={id}
                       className={todo.complete ? "active" : ""} >
                    <input type="checkbox" name="" id={id}
                    checked={todo.complete}
                    onChange={()=>checkComplete(id)}
                    />

                    {todo.name}
                </label>
                <button disabled={todo.complete}>Edit</button>
            </li>

    )
}
export default ListItem;