import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    isLoading: false,
    auth: false
}

const appReducer = createSlice({
    name: 'app',
    initialState,
    reducers: {
        startLoading: state => {
            state.isLoading = true
        },
        stopLoading: state => {
            state.isLoading = false
        },
        authSuccess: state => {
            state.auth = localStorage.getItem('user_id')
        }
    }
})

export default appReducer.reducer

export const {startLoading, stopLoading, authSuccess} = appReducer.actions
export const appSelector = state => state.app