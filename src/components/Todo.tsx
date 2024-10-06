import React, { useState } from 'react'
import { IoIosRemoveCircleOutline } from "react-icons/io";
import { CiEdit } from "react-icons/ci";
import { FaCheck } from "react-icons/fa";
import '../css/Todo.css'
import { TodoType } from '../types/Types';
import { useDispatch } from 'react-redux';
import { removeTodoById, updateTodo } from '../redux/todoSlice';

interface TodoProps {
    todoProps: TodoType
}

function Todo({ todoProps }: TodoProps) {

    const { id, content } = todoProps;

    const [editable, setEditAble] = useState<boolean>(false);
    const [newTodo, setNewTodo] = useState<string>(content);

    const dispatch = useDispatch();
    const handleRemoveTodo = () => {
        dispatch(removeTodoById(id));
    }

    const handleUpdateTodo = () => {
        const payload: TodoType = {
            id: id,
            content: newTodo
        }
        dispatch(updateTodo(payload));
        setEditAble(false);
    }


    return (
        <div className='todos'>
            {editable ?
                <input
                    className='todo-input2'
                    type='text'
                    value={newTodo}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewTodo(e.target.value)} /> :
                <div>{content}</div>
            }
            <div>
                <IoIosRemoveCircleOutline onClick={handleRemoveTodo} className='todo-remove' />
                {editable ? <FaCheck onClick={handleUpdateTodo} className='todo-edit' /> : <CiEdit onClick={() => setEditAble(true)} className='todo-edit' />}

            </div>
        </div>
    )
}

export default Todo
