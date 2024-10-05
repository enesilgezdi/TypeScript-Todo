import React from 'react'
import { IoIosRemoveCircleOutline } from "react-icons/io";
import { CiEdit } from "react-icons/ci";
import { FaCheck } from "react-icons/fa";
import '../css/Todo.css'

function Todo() {
    return (
        <div className='todos'>
            <div>BEN İLK TODOYUM</div>
            <div>
                <IoIosRemoveCircleOutline className='todo-remove' />
                <CiEdit className='todo-edit' />
            </div>
        </div>
    )
}

export default Todo
