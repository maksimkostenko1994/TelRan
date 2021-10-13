import {useState} from "react"
import {useDispatch} from 'react-redux'
import {addTodoAction} from "../todo_store/todoReducer/TodoReducer"

import {fbAuth} from "../config/fbconfig"


const Header = () => {

    const [input, setInput] = useState('')

    const dispatch = useDispatch()

    return (
        <>
            <button onClick={(event) => {
                event.preventDefault()
                fbAuth.signOut()
                localStorage.removeItem('user_id')
            }}>Logout</button>
            <form className='row' action='#'
                  onSubmit={event => {
                      event.preventDefault();
                      dispatch(addTodoAction(input, localStorage.getItem('user_id')));
                      setInput('')
                  }}>
                <input type='text' name='text' placeholder="Type todo" value={input}
                       onChange={event => setInput(event.target.value)}/>
                <button type='submit'>Add todo</button>
            </form>
        </>
    )
}

export default Header