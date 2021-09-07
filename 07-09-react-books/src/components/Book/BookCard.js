import "../../css/BookCard.css"

import {useState} from 'react'

const BookCard = ({title, author, yearIssue, genre, cover}) => {

    const [count, setCount] = useState(0)

    const addBook = () => count < 10 ? setCount(count + 1) : setCount(10)

    const delBook = () => count > 0 ? setCount(count - 1) : setCount(0)

    return (
        <>
            <h1>{title}</h1>
            <h2>{author}</h2>
            <h4>{yearIssue}</h4>
            <h3>{genre}</h3>
            <img src={cover} alt={title}/>
            <div className="count">
                <button onClick={addBook}>+</button>
                <h1>{count}</h1>
                <button onClick={delBook}>-</button>
            </div>
        </>
    )
}

export default BookCard