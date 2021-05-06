import React, { useState, useEffect }from "react";
import TodosList from "./TodosList";
import Header from "./Header";
import InputTodo from "./InputTodo";
import { v4 as uuidv4 } from "uuid";
import { Route, Switch } from 'react-router-dom';
import Navigation from './Navigation';
import About from "../pages/About";
import NotMatch from "../pages/NotMatch";

const TodoContainer = () => {
    //get stored Items
    const getInitialTodos = () => {
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

    // add an item
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

    // delete an item
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


    useEffect(() => {
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
      <Route path="*">
        <NotMatch />
      </Route>
    </Switch>
     </>
        );
    }
  
    

export default TodoContainer