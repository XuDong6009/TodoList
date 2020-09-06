import {ADD_TODO,UPDATE_CHECK,DELETE_TODO,UPDATE_TEXT} from './atcion-types'

export const addTodo = (todo) => ({type:ADD_TODO,data:todo})
export const updateCheck = (index) => ({type:UPDATE_CHECK,data:index})
export const updateText = (data) => ({type:UPDATE_TEXT,data})
export const deleteTodo = (index) => ({type:DELETE_TODO,data:index})

