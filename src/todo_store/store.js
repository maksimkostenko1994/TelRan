import {combineReducers} from 'redux'
import {configureStore} from "@reduxjs/toolkit"
import AppReducer from './appReducer/AppReducer'
import TodoReducer from './todoReducer/TodoReducer'
import authReducer from "./authReducer"

const rootReducer = combineReducers({
    todo: TodoReducer,
    app: AppReducer,
    auth: authReducer
})

const store = configureStore({reducer: rootReducer})

export default store