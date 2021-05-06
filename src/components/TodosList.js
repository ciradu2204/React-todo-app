
import React from "react";
import TodoItem from "./TodoItem";

const TodosList = props => {
    //convert the todos object into an array
    const newArray = Array.from(props.todos)
    return (    
     //Passing each array's element in the TodoItem component
          <ul>          
            {newArray.map(todo => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    handleChangeProps={props.handleChangeProps}
                    deleteTodoProps={props.deleteTodoProps}
                    setUpdate={props.setUpdate}
                />
            ))}

         </ul>

        )
    }


export default TodosList