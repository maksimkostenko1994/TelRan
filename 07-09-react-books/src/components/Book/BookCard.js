import "../../css/BookCard.css"

const BookCard = ({title, id, author, yearIssue, genre, cover, price, quantity, addBook}) => {

    return (
        <>
            <h1>{title}</h1>
            <h2>{author}</h2>
            <h4>{yearIssue}</h4>
            <h3>{genre}</h3>
            <img src={cover} alt={title}/>
            <h5>Price: {price}</h5>
            <div className="count">
                <button onClick={() => addBook(id)}>+</button>
                <h1>{quantity}</h1>
                <button>-</button>
            </div>
        </>
    )
}

export default BookCard