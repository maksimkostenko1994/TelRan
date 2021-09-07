import './css/App.css';
import BookList from './components/Book/BookList'
import BookCard from "./components/Book/BookCard"

function App() {
    return (
        <div className="App">
            <header className="menu"/>
            <div className="app-info">
                <BookList/>
            </div>
        </div>
    );
}

export default App;
