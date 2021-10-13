import './App.css';
import Header from './components/Header';
import TodoList from './components/TodoList';
import {useSelector} from 'react-redux'
import Loader from './components/Loader';
import Authenticate from "./components/Authenticate"

import {appSelector} from "./todo_store/appReducer/AppReducer"

function App() {

    const isLoading = useSelector(appSelector).isLoading
    return (
        <div className="App">
            <Authenticate/>
            <Header/>
            <hr/>
            <TodoList/>
            {isLoading && <Loader/>}
        </div>
    );
}

export default App;
