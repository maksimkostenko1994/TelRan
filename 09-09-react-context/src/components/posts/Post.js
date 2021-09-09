import Comment from '../comments/Comment'

const Post = ({post: {postId, date, author, title, shortDesc, content, comments}}) => {
    return (
        <div className="post">
            <h3>{author}</h3>
            <h4>{date}</h4>
            <h1>{title}</h1>
            <p>{shortDesc}</p>
            {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
        </div>
    )
}

export default Post