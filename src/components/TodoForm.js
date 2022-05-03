import React, { useState, useEffect, useRef } from 'react'

function TodoForm(props) {
    const [todoInput, setTodoInput] = useState(props.edit ? props.edit.value : "");

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()

        return () => {

        }
    }, [])

    const handleChange = e => {
        setTodoInput(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            // id: giveId(),
            id: Math.floor(Math.random() * 10000),
            text: todoInput
        });
        setTodoInput("");
    }


    return (
        <form className='todo-form' onSubmit={handleSubmit}>
            {props.edit ? (
                <>
                    <input type="text" placeholder='Update your task' value={todoInput} className="todo-input edit" name="text" onChange={handleChange} ref={inputRef} ></input>
                    <button className='todo-button edit' >Update</button>
                </>
            ) : (
                <>
                    <input type="text" placeholder='Add a todo' value={todoInput} className="todo-input" name="text" onChange={handleChange} ref={inputRef} ></input>
                    <button className='todo-button' >Add todo</button>
                </>

            )}

        </form>
    )
}

export default TodoForm