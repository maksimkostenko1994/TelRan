import Store from "../../store/Store"
import Book from './Book'
import BookCard from './BookCard'
import {useState} from 'react'


import "../../css/BookList.css"

const BookList = () => {

    const books = Store()
    let [isClicked, setClick] = useState(false)
    let [bookCard, setBook] = useState({})

    const getBookInfo = event => {
        if (!isClicked)
            setClick(isClicked = true)
        const id = +event.target.parentNode.id
        const book = Store().find(item => item.id === id)
        setBook(bookCard = {...book})
    }
    return (<>
            <ul className="book-list">
                {books.map((book, index) => <Book getBookInfo={getBookInfo} key={index} id={book.id} title={book.title}
                                                  author={book.author}/>)}
            </ul>
            <div className="book-card">
                {isClicked ? <BookCard key={bookCard.id}
                        title={bookCard.title}
                        author={bookCard.author}
                        yearIssue={bookCard.yearIssue}
                        genre={bookCard.genre}
                        cover={bookCard.cover}
                    /> :
                    <h1>No selected book</h1>}
            </div>
        </>
    )
}

export default BookList