import React, { useState, useEffect} from "react"
import styles from "./TodoItem.module.css"
import { FaTrash } from "react-icons/fa"
import { FaRegEdit } from "react-icons/fa"


const TodoItem = props => {

    // Editing state
    const [editing, setEditing] = useState(false);

   //When the edit button is clicked, the editing state is set to true.
    const handleEditing = () => {
        setEditing(true)
    }

    //When a user press the enter key, the editing state is set to false.
    const handleUpdatedDone = event => {
        if (event.key === "Enter") {
            setEditing(false)
        }
    }

    //When the item is completed, the title will have this style.
    const completedStyle = {
        fontStyle: "Italic",
        color: "#595959",
        opacity: 0.4,
        paddingLeft: 15,
        textDecoration: "line-through",
    }

    //When the item is unchecked, the title will have this style. 
    const unCompletedStyle = {
        paddingLeft: 15,
    }

    //Destructuring the todo item
    const { completed, id, title } = props.todo

    // The different mode style
    let viewMode = {}
    let editMode = {}

    //When editing state is true, the view mode will not be displayed. Otherwise, it will be displayed.
    if (editing) {
        viewMode.display = "none";
    } else {
        editMode.display = "none";
    }


    useEffect(() =>{
        return (
            console.log("Cleaning")
            
     )
    })
  
      
        return (
            <li className={styles.item}>
                 <div  style={viewMode}>
                    <input type="checkbox" checked={completed} onChange={() => props.handleChangeProps(id)} />
                    <button onClick={handleEditing}>
                        <FaRegEdit 
                            style={{ color: "orangered", fontSize: "16px" }}

                        />
                    </button>
                    <button onClick={() => props.deleteTodoProps(id)}>
                        <FaTrash
                            style={{ color: "orangered", fontSize: "16px" }}
                        />
                    </button>
                    <span style={completed ? completedStyle : unCompletedStyle}>
                        {title}
                    </span>
                </div>

                <input
                    type="text"
                    style={editMode}
                    className={styles.textInput}
                    value={title}
                    onChange={e => {
                        props.setUpdate(e.target.value, id)
                    }}
                    onKeyDown={handleUpdatedDone}
                />
               
                
            </li>
            )

    }
       
 


export default TodoItem