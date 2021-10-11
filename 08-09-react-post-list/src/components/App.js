import '../css/App.css';

import Store from "../store/posts"
import {useState} from 'react'

import PostList from "./posts/PostList"

function App() {
    const [posts, setPosts] = useState(Store())

    const setSmth = (id, key) => {
        const postsArray = [...posts]
        const index = postsArray.findIndex(item => item.id === id)
        const post = {...postsArray[index]}
        if (post[key] !== undefined)
            post[key]++
        else post[key] = 1
        postsArray[index] = post
        setPosts(postsArray)
    }

    const setLike = id => setSmth(id, 'likes')

    const setDislike = id => setSmth(id, 'dislikes')


    return (
        <div className="App">
            <PostList posts={posts} setLike={setLike} setDislike={setDislike}/>
        </div>
    );
}

export default App;
