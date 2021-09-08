import Post from "./Post"

import "../../css/PostList.scss"

const PostList = ({posts, setLike, setDislike}) => {
    return (
        <div className="post-list">
            <ul>
                {posts.map(post =>
                    <Post
                        key={post.id}
                        id={post.id}
                        title={post.title}
                        body={post.body}
                        date={post.date = new Date().toLocaleDateString()}
                        likes={post.likes}
                        dislikes={post.dislikes}
                        setLike={setLike}
                        setDislike={setDislike}
                    />
                )}
            </ul>
        </div>
    )
}

export default PostList