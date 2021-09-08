import '../css/App.css';

import Store from "../store/posts"
import {useState} from 'react'

import PostList from "./posts/PostList"

function App() {
    const [posts, setPosts] = useState(Store())

    const setLike = id => {
        const postsArray = [...posts]
        const index = postsArray.findIndex(item => item.id === id)
        const post = {...postsArray[index]}
        if (post.likes !== undefined)
            post.likes++
        else post.likes = 1
        postsArray[index] = post
        setPosts(postsArray)
    }

    const setDislike = id => {
        const postsArray = [...posts]
        const index = postsArray.findIndex(item => item.id === id)
        const post = {...postsArray[index]}
        if (post.dislikes !== undefined)
            post.dislikes++
        else post.dislikes = 1
        postsArray[index] = post
        setPosts(postsArray)
    }

    return (
        <div className="App">
            <PostList posts={posts} setLike={setLike} setDislike={setDislike}/>
        </div>
    );
}

export default App;
