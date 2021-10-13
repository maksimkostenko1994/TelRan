import {createSlice} from "@reduxjs/toolkit"

import {startLoading, stopLoading} from '../appReducer/AppReducer'

import {addTodoItem, getAllTodos} from "../../services/todoService"

const initialState = {
    todos: []
}

const todoReducer = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        setTodo: (state, {payload}) => {
            state.todos = payload
        },

        addTodo: (state, {payload}) => {
            state.todos.push(
                {
                    title: payload.title,
                    status: false
                }
            )
        },

        changeStatus: (state, {payload}) => {
            state.todos[payload.index].status = payload.status
        },
        removeTodo: (state, {payload}) => {
            state.todos.splice(payload.index, 1)
        }
    }
})

export default todoReducer.reducer

export const {addTodo, changeStatus, removeTodo, setTodo} = todoReducer.actions
export const todoSelector = state => state.todo.todos

export const addTodoAction = (title, uid) => async dispatch => {
    dispatch(startLoading())
    try {
        const response = addTodoItem(title, uid)
        console.log(response)
        dispatch(addTodo({title}))
    } catch (e) {
        console.log(e.message)
    } finally {
        dispatch(stopLoading())
    }
}

export const getAllTodoAction = (uid) => async dispatch => {
    dispatch(startLoading())
    try {
        const response = await getAllTodos(uid)
        dispatch(setTodo({todos: response.todos}))
    } catch (e) {
        console.log(e.message)
    } finally {
        dispatch(stopLoading())
    }
}