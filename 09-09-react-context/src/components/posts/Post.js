import "../../css/posts/Post.scss"

import {useContext} from 'react'
import {PostContext} from '../App'

const Post = ({post: {postId, date, author, title, shortDesc, content, comments}}) => {
    const {getPostInfo} = useContext(PostContext)

    return (
        <div onClick={() => getPostInfo(postId)} className="post">
            <h3>{author}</h3>
            <h4>{date}</h4>
            <h1>{title}</h1>
            <p>{shortDesc}</p>
            <h3 className="comment-info"><span>{comments.length}</span>Comments</h3>
        </div>
    )
}

export default Post