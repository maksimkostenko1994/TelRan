const Book = ({id, title, author, getBookInfo}) => {

    return (
        <li onClick={getBookInfo} key={id} id={id} className="book">
            <h1>{title}</h1>
            <h2>{author}</h2>
        </li>
    )
}

export default Book