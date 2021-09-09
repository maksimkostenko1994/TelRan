import Store from '../../store/Store'
import Post from './Post'
//import {useState} from "react"

const PostList = () => {
    //const [posts, setPosts] = useState(Store())
    const posts = Store()

    return(
        <div className="post-list">
            {posts.map(post => <Post key={post.postId} post={post}/>)}
        </div>
    )
}

export default PostList