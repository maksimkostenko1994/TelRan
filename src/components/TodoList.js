import {useDispatch, useSelector} from 'react-redux'
import {useEffect} from 'react'

import {changeStatus, removeTodo, todoSelector, getAllTodoAction} from "../todo_store/todoReducer/TodoReducer"
import Loader from "./Loader"

//import Todo from './Todo';

const TodoList = () => {
    const todos = useSelector(todoSelector)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllTodoAction(localStorage.getItem('user_id')))
    }, [dispatch])

    return (
        <ul>
            {todos.todos ?
                todos.todos.map((todo, index) =>
                    <li key={index}>
                        <div className='row'>
                            <input className='check_box' type="checkbox"
                                   checked={todo.status}
                                   onChange={event => dispatch(changeStatus({index, status: event.target.checked}))}/>
                            <span style={{textDecoration: todo.status ? 'line-through' : 'none'}}>{todo.title}</span>
                            <button onClick={() => dispatch(removeTodo(index))}>Remove</button>
                        </div>
                    </li>): <Loader/>
            }
        </ul>
    )
}

export default TodoList