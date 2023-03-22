import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { FaEdit } from 'react-icons/fa';
import { BsTrashFill } from "react-icons/bs";
import {toggleComplete, removeTodo, toggleEdit, saveEdit} from '../../redux/slices/TodoSlice'
import './TodoList.css'
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

const TodoList = () => {
const todos = useSelector((state) => state.tasks);
const dispatch = useDispatch();
const [todoName, setTodoName] = useState("");

  return (  
    <div className="todo-list">
        <ul>
            {todos && todos.map(task => {
                const {id, name, isCompleted, isEdit} = task;
                return (
                    <>
                    {isEdit ? <>
                    <Form.Group className="mb-2">
                        <Form.Control type="text" 
                        defaultValue={name}
                        onChange={(e) => setTodoName(e.target.value)}
                        />
                    </Form.Group>
                    <div className='controls'>
                         <Button variant="primary" type="submit" onClick={(e) => {todoName !=="" && dispatch(saveEdit({id: id, name: todoName}))}}>
                           save edit
                        </Button>
                    </div></>
                    : 
                    <li key={id} style={{textDecoration: isCompleted === true ? "line-through" : "none", backgroundColor: isCompleted === true ? "#c6e5bc" : "#f5eede"}}>
                        <span className='todo_title'>{name}</span> 
                        <div className='todo__actions'>
                            <Form.Check  onChange={(e) => dispatch(toggleComplete(id))}
                            checked={isCompleted}></Form.Check>
                            <span onClick={(e) => dispatch(toggleEdit(id))} className="action__icon edit"><FaEdit/></span>
                            <span onClick={(e) => dispatch(removeTodo(id))} className="action__icon delete"><BsTrashFill /></span>
                            </div>
                    </li>}
                    </>
                )
            })}
        </ul>
    </div>
  )
}

export default TodoList
