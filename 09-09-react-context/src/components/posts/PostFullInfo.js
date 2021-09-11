import "../../css/posts/PostFullInfo.scss"

import Comment from '../comments/Comment'

import {useState} from 'react'

const PostFullInfo = ({post: {postId, date, author, title, content, comments}, closePostInfo, addComment}) => {

    const [name, setName] = useState('')
    const [text, setText] = useState('')

    const inputNameHandler = event => {
        setName(event.target.value)
    }

    const textareaClickHandler = event => {
        setText(event.target.value)
    }

    return (
        <div className="post-info">
            <button className="btn-close" onClick={() => closePostInfo()}>back</button>
            <h1>{author}</h1>
            <h4>{date}</h4>
            <h1>{title}</h1>
            <p>{content}</p>
            <hr/>
            {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
            <form action="#" onClick={(event) => addComment(event, postId, name, text)} name="addComment">
                <h1>Leave your message</h1>
                <input onChange={inputNameHandler} type="text" name="name" placeholder="Type name..."/>
                <textarea onChange={textareaClickHandler} name="text" placeholder="Type message..."/>
                <button>Add comment</button>
            </form>
        </div>
    )
}

export default PostFullInfo