import "../../sass/PostList.scss"

import React, {useState, useEffect} from 'react'
import Store from "../../store/Store"
import Post from "./Post"
import PostInfo from "./PostInfo"

export const PostContext = React.createContext()

const PostList = () => {
    const [loading, setLoading] = useState(true)
    const [posts, setPosts] = useState([])
    const [error, setError] = useState(null)
    const [currentPost, setCurrentPost] = useState(null)
    const [user, setUser] = useState(null)

    useEffect(() => {
        setLoading(true)
        setError(null)
        Store.getAllPosts()
            .then(data => {
                setLoading(false)
                setPosts(data)
            })
            .catch(error => new Error(error.message))
    }, [])


    const changePost = (id) => {
        const post = posts.find(item => item.id === id)
        setCurrentPost(post)
    }

    const getUser = (id) => {
        Store.getUserById(id)
            .then(data => {
                setUser(data)
            })
            .catch(error => new Error(error.message))
    }

    return (
        <PostContext.Provider value={{
            changePost: changePost,
            getUser: getUser
        }}>
            <div className="post-box">
                <ul className="posts-list">
                    {
                        loading ? <h1>Loading</h1> : posts.map(post => <Post key={post.id} post={post}/>)
                    }
                </ul>
                {currentPost && user ? <PostInfo user={user} post={currentPost}/> : <h1>No selected post</h1>}
            </div>
        </PostContext.Provider>
    )
}

export default PostList