import { createSlice, current } from '@reduxjs/toolkit'

const initialState = []


const TodoSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
        addTodo: (state, action) => {
          const newTask = {
            id: Math.floor(Math.random() * 1000),
            name: action.payload.task,
            isCompleted: false,
            isEdit: false
          }
          state.unshift(newTask);
        },
        removeTodo: (state, action) => {
         return state.filter(todo => todo.id !== action.payload);
        },
        toggleComplete: (state, action) => {
          const todoIndex = state.find(todo => todo.id === action.payload)
          if (todoIndex) {
            todoIndex.isCompleted = !todoIndex.isCompleted
          }
        },
        toggleEdit: (state, action) => {
          const todoIndex = state.find(todo => todo.id === action.payload)
          if(todoIndex) {
            todoIndex.isEdit = !todoIndex.isEdit
          }
        },
        saveEdit: (state, action) => {
         const todoIndex = state.find(todo => todo.id === action.payload.id);
         console.log(current(todoIndex));
         if(todoIndex) {
          todoIndex.name = action.payload.name;
          todoIndex.isEdit = !todoIndex.isEdit;
         }
         console.log(current(todoIndex));
        }
  }
})

export const {addTodo, removeTodo, toggleComplete, toggleEdit, saveEdit} = TodoSlice.actions
export default TodoSlice.reducer