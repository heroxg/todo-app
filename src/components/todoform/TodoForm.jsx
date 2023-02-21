import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../../redux/slices/TodoSlice';
import { useState } from 'react';
import Alert from '@mui/material/Alert';
import './TodoForm.css'




const TodoForm = () => {
    const [taskValue, setTaskValue] = useState("");
    const dispatch = useDispatch();
    const [showError, setShowError] = useState(false);
    const [open, setOpen] = React.useState(true);

    //add to do Items 
    const addTask = (e) => {
        e.preventDefault();
        if(taskValue.trim().length === 0) {
          setShowError(true);
          setTaskValue("");
          return
        }

        dispatch(addTodo({
          task: taskValue
        }))

        setTaskValue("");
    }

  return (
    <div>
      {showError && <div className='overlay'>
          <Alert severity="warning" onClose={() => setShowError(false)}>
            Please enter a task.
          </Alert>
      </div>}
       <Form className='todo__form'>
            <Form.Group className="mb-3">
                <Form.Control type="text" 
                  placeholder="Creat a task to get started" 
                  value={taskValue} 
                  onChange={(e) => setTaskValue(e.target.value)} />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={addTask}>
                Add todo
            </Button>
        </Form>
    </div>
  )
}

export default TodoForm
