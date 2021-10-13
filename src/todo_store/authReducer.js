import {createSlice} from '@reduxjs/toolkit'
import {login} from "../services/authService"

import {startLoading, stopLoading, authSuccess} from "./appReducer/AppReducer"

const initialState = {
    error: null
}

const authReducer = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setError: (state, {payload}) => {
            state.error = payload
        },
        resetError: state => {
            state.error = null
        }
    }
})

export default authReducer.reducer

export const {setError, resetError} = authReducer.actions

export const errorSelector = state => state.auth.error

export const loginAction = (email, password) => {
    return async dispatch => {
        dispatch(startLoading())
        dispatch(resetError())
        try {
            await login(email, password)
            dispatch(authSuccess())
        } catch (error) {
            console.log(error.message)
            dispatch(setError(error.message))
        } finally {
            dispatch(stopLoading())
        }
    }
}