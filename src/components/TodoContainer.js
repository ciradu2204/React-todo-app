import React, { useState, useEffect }from "react";
import TodosList from "./TodosList";
import Header from "./Header";
import InputTodo from "./InputTodo";
import { v4 as uuidv4 } from "uuid";
import { Route, Switch } from 'react-router-dom';
import Navigation from './Navigation';
import About from "../pages/About";

const TodoContainer = () => {
    //get stored Items from localstorage
    const getInitialTodos = () => {
        const temp = localStorage.getItem("todos")
        const savedTodos = JSON.parse(temp)
        let res = [];
        for (var i in savedTodos) {
            res.push(savedTodos[i]);
        }
        return res || []
    }

    //todo state to store items
    const [todos, setTodos] = useState(getInitialTodos());

    //when the item is checked, changes the item's completed element to true
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

    // adds an item
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

    // deletes an item
    const delTodo = id => { 
        const result = todos.filter(todo => todo.id !== id);
        setTodos(result)
     
    }

    //update an item after editing
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

    //updates the localstorage everytime the todos state changes
    useEffect(() => {
        console.log("changing");
        const temp = JSON.stringify(todos)
        localStorage.setItem("todos", temp)
    }, [todos])

 
    return (
        <>
    <Navigation />
    <Switch>
    <Route path="/" exact>
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
      </Route>
      <Route path="/about">
          <About />
      </Route>
    </Switch>
     </>
        );
    }
  
    

export default TodoContainer