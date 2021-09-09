const Comment = ({comment: {author, text}}) => {
    return (
        <div className="comment">
            <h1>{author}</h1>
            <p>{text}</p>
        </div>
    )
}

export default Comment