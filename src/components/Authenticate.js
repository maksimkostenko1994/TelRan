import React, {useState} from 'react';
import {useSelector, useDispatch} from "react-redux"

import {loginAction} from "../todo_store/authReducer"
import {errorSelector} from "../todo_store/authReducer"

const Authenticate = () => {

    const [state, setState] = useState({
        email: '',
        password: ''
    })

    const error = useSelector(errorSelector)
    const dispatch = useDispatch()

    const onChangeHandler = ({target}) => {
        setState({...state, [target.name]: target.value})
    }

    return (
        <div>
            {error && <h3>{error}</h3>}
            <form className="row login" action="#" name="auth">
                <input placeholder="Type email" name="email" type="text" value={state.email}
                       onChange={event => onChangeHandler(event)}/>
                <input placeholder="Type password" name="password" type="text" value={state.password}
                       onChange={event => onChangeHandler(event)}/>
                <div className="login-btns">
                    <button type="submit" name="registration">Registration</button>
                    <button onClick={event => {
                        event.preventDefault()
                        dispatch(loginAction(state.email, state.password))
                    }} type="submit" name="login">Login
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Authenticate;