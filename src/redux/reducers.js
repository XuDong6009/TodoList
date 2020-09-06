import {ADD_TODO,UPDATE_CHECK,DELETE_TODO,UPDATE_TEXT} from './atcion-types'

const defaultState = {
    todoList:[]
}
function todoReducer(state = defaultState,action) {
    switch (action.type) {
        case ADD_TODO:
            return {todoList:[action.data,...state.todoList]}
        case UPDATE_CHECK:
            return {todoList:state.todoList.map((item,index) => {
                    if(index === action.data) {
                        item.complete = !item.complete;
                    }
                    return item
                })}
        case UPDATE_TEXT:
            return {todoList:state.todoList.map((item,index) => {
                    if(index === action.data.index) {
                        item.title = action.data.text
                    }
                    return item
                })}
        case DELETE_TODO:
            return {todoList:state.todoList.filter((item,index) => {
                    return index !== action.data
                })}
        default:
            return state
    }
}

export default  todoReducer
