import React, { useState, useEffect }from "react";
import TodosList from "./TodosList";
import Header from "./Header";
import InputTodo from "./InputTodo";
import { v4 as uuidv4 } from "uuid";

const TodoContainer = () => {

    const getInitialTodos = () => {
        //getting storedItems
        const temp = localStorage.getItem("todos")
        const savedTodos = JSON.parse(temp)
        let res = [];
        for (var i in savedTodos) {
            res.push(savedTodos[i]);
        }
        return res || []
    }
    const [todos, setTodos] = useState(getInitialTodos());

    const handleChange = (id) => {
        setTodos(prevState => 
             prevState.map(todo => {

                if (todo.id === id) {

                    return {
                        ...todo,
                        completed: !todo.completed,
                    }
                    

                }

                return todo
               
             }),
        )
    };

    const addTodoItem = title => {
        const newTodo = {
            id: uuidv4(),
            title: title,
            completed: false
        };
        setTodos(
           [...todos, newTodo]
        );
    };

    const delTodo = id => {
         
        const result = todos.filter(todo => todo.id !== id);
        setTodos(result)
     
    }

    const setUpdate = (updatedTitle, id) => {
        setTodos(
            todos.map(todo => {
                if (todo.id === id) {
                    todo.title = updatedTitle
                }
                return todo
            })
        )
    }
    useEffect(() => {
        //storing todos items 

        const temp = JSON.stringify(todos)
        localStorage.setItem("todos", temp)
    }, [todos])

 
    return (

    
            <div className="container">
            <div className="inner">
             <Header />
                    <InputTodo
                        addTodoProps={addTodoItem} />
                    <TodosList
                    todos={todos}
                    handleChangeProps={handleChange}
                    deleteTodoProps={delTodo}
                    setUpdate={setUpdate}
                />
             </div>
            </div>
    
        
        );
    }
  
    

export default TodoContainer