
import "../../sass/PostInfo.scss"

const PostInfo = ({user, post}) => {
    return(
        <div className="post-info">
            <h3>{user.name}</h3>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </div>
    )
}

export default PostInfo