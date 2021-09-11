import Post from './Post'

import "../../css/posts/PostList.scss"


const PostList = ({posts}) => {

    return(
        <div className="post-list">
            {posts.map(post => <Post key={post.postId} post={post}/>)}
        </div>
    )
}

export default PostList