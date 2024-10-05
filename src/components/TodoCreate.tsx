import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createTodo } from '../redux/todoSlice';
import { TodoType } from '../types/Types';

function TodoCreate() {
    const dispatch = useDispatch();

    const [newTodo, setNewTodo] = useState<string>("");

    const handleCreateTodo = () => {
        if (newTodo.trim().length == 0) {
            alert("Please enter a todo");
            return;
        }
        const payload: TodoType = {
            id: Math.floor(Math.random() * 10000),
            content: newTodo
        }

        dispatch(createTodo(payload));
        setNewTodo("");
    }
    return (
        <div className='todo-create'>
            <input value={newTodo} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewTodo(e.target.value)} className='todo-input' type="text" placeholder='Add Todo..' />
            <button onClick={handleCreateTodo} className='todo-create-button'>Create</button>
        </div>
    )
}

export default TodoCreate
