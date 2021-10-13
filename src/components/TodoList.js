import {useDispatch, useSelector} from 'react-redux'

import {changeStatus, removeTodo, todoSelector} from "../todo_store/todoReducer/TodoReducer"

//import Todo from './Todo';

const TodoList = () => {
    const todos = useSelector(todoSelector)

    const dispatch = useDispatch()

    return (
        <ul>
            {
                todos.map((todo, index) =>
                    <li key={index}>
                        <div className = 'row'>
                            <input className = 'check_box' type="checkbox"
                                   checked ={todo.status}
                                   onChange = {event => dispatch(changeStatus({index, status: event.target.checked}))}/>
                            <span style = {{textDecoration: todo.status ? 'line-through':'none' }}>{todo.title}</span>
                            <button onClick = {() => dispatch(removeTodo(index))}>Remove</button>
                        </div>
                    </li>)
            }
        </ul>
    )
}

export default TodoList