import "../../css/Post.scss"

const Post = ({id, title, body, date, likes, dislikes, setLike, setDislike}) => {
    return (
        <li className="post">
            <h1>{title}</h1>
            <p>{body}</p>
            <h3>{date}</h3>
            <button onClick={() => setLike(id)}><span>{likes ? likes : 0}</span> Like</button>
            <button onClick={() => setDislike(id)}><span>{dislikes ? dislikes : 0}</span> Dislike</button>
        </li>
    )
}

export default Post