import React, { useState } from 'react'
import Todo from './Todo'
import TodoForm from './TodoForm'

function TodoList() {
    const [todos, setTodos] = useState([])

    const addTodo = todo => {
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return
        }

        const newTodos = [todo, ...todos]

        setTodos(newTodos)
        console.log(todos)
    }

    const removeTodoHandler = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id)

        setTodos(removeArr)
    }

    const updateTodo = (id, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return
        }

        setTodos(prev => prev.map(item => {
            if (item.id === id) {
                item.text = newValue.text
            }
            return item
        }))
    }

    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete
            }
            return todo
        })

        setTodos(updatedTodos)
    }

    return (
        <div>
            <h1>TODO's for today</h1>
            <TodoForm onSubmit={addTodo}></TodoForm>
            <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodoHandler} editTodo={updateTodo}></Todo>
        </div>
    )
}

export default TodoList