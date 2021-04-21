import React, { useState, useEffect} from "react"
import styles from "./TodoItem.module.css"
import { FaTrash } from "react-icons/fa"


const TodoItem = props =>{

    const [editing, setEditing] = useState(false);

    const handleEditing = () => {
        setEditing(true)
    }

    const handleUpdatedDone = event => {
        if (event.key === "Enter") {
            setEditing(false)
        }
    }

    const completedStyle = {
        fontStyle: "Italic",
        color: "#595959",
        opacity: 0.4,
        paddingLeft: 15,
        textDecoration: "line-through",
    }

    const unCompletedStyle = {
        paddingLeft: 15,
    }
    const { completed, id, title } = props.todo

    let viewMode = {}
    let editMode = {}

    if (editing) {
        viewMode.display = "none";
    } else {
        editMode.display = "none";
    }

    useEffect(() => {
        return () => {
            console.log("cleaning up...")
        }
    }, [])
  
      
        return (
            <li className={styles.item}>
                <div onDoubleClick={handleEditing} style={viewMode}>
                    <input type="checkbox" checked={completed} onChange={() => props.handleChangeProps(id)} />
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