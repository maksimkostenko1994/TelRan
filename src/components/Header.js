import {useState} from "react"
import {useDispatch} from 'react-redux'
import {addTodoAction} from "../todo_store/todoReducer/TodoReducer"


const Header = () => {

    const [input, setInput] = useState('')

    const dispatch = useDispatch()

    return (
        <form className='row' action='#'
              onSubmit={event => {
                  event.preventDefault();
                  dispatch(addTodoAction(input));
                  setInput('')
              }}>
            <input type='text' name='text' placeholder="Type todo" value={input}
                   onChange={event => setInput(event.target.value)}/>
            <button type='submit'>Add todo</button>
        </form>
    )
}

export default Header