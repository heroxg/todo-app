import { combineReducers } from 'redux'
// import { AddTodo } from '../slices/TodoSlice'
import taskReducer from '../slices/TodoSlice'

const rootReducers = combineReducers({
    tasks: taskReducer,
})

export default rootReducers

