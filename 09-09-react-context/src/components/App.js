import '../css/App.css';

import PostList from './posts/PostList'
import PostFullInfo from './posts/PostFullInfo'

import React, {useState} from 'react'

import Store from "../store/Store"

export const PostContext = React.createContext()

function App() {

    const [posts, setPosts] = useState(Store())
    const [post, setPost] = useState(null)
    const [commentId, setCommentId] = useState(null)

    const getPostInfo = id => {
        const postsArray = [...posts]
        const index = postsArray.findIndex(item => item.postId === id)
        const postObj = {...postsArray[index]}
        setPost(postObj)
    }

    const closePostInfo = () => {
        setPost(null)
    }

    const addComment = (event, id, name, text) => {
        event.preventDefault()
        if (event.target.tagName === "BUTTON")
            if (id !== '' && name !== '' && text !== '') {
                const postsArray = [...posts]
                const index = postsArray.findIndex(item => item.postId === id)
                if (index >= 0) {
                    const postObj = {...postsArray[index]}
                    let idComment = commentId;
                    if (postObj.comments.length > 0) {
                        if (+postObj.comments[postObj.comments.length - 1].id === idComment) {
                            idComment = +postObj.comments[postObj.comments.length - 1].id + 1
                        }
                    } else idComment = 1
                    postObj.comments.push({id: idComment.toString(), author: name, text: text})
                    setCommentId(idComment)
                    postsArray[index] = postObj
                    setPosts(postsArray)
                    event.currentTarget.reset()
                }
            }
    }


    return (
        <div className="App">
            <PostContext.Provider value={{
                getPostInfo: getPostInfo
            }}>
                {post ? <PostFullInfo post={post} closePostInfo={closePostInfo} addComment={addComment}/> :
                    <PostList posts={posts}/>}
            </PostContext.Provider>
        </div>
    );
}

export default App;
