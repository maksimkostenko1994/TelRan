import "../../sass/Post.scss"

import {PostContext} from "./PostList"
import {useContext} from "react"

const Post = ({post}) => {

    const {changePost, getUser} = useContext(PostContext)

    return (
        <li className="post-item" onClick={(event) => {
            changePost(post.id);
            getUser(post.userId)
        }}>
            <h2>{post.title}</h2>

        </li>
    )
}

export default Post