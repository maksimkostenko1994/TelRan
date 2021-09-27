import React, {useState} from 'react';
import {connect} from "react-redux"
import {REMOVE_POST, EDIT_POST} from "../store/actionTypes"

const Post = ({post, index, removePost, editPost}) => {

    const [input, setInput] = useState({...post})

    const editPostHandler = ({target}) => {
        setInput({...input, [target.name]: target.value})
    }

    return (
        <li className="post-item">
            <h1><span>Title: </span> <input type="text" name="title" value={input.title}
                                            onChange={event => editPostHandler(event)}/></h1>
            <h3><span>Author: </span> <input type="text" name="author" value={input.author}
                                             onChange={event => editPostHandler(event)}/></h3>
            <p><strong>Text:</strong> <br/><textarea name="text" value={input.text}
                                                     onChange={event => editPostHandler(event)}/></p>
            <button className="btn-remove" onClick={() => removePost(index)}>X</button>
            <button className="btn-edit" onClick={() => {
                editPost(input, index)
            }}>Edit Post
            </button>
        </li>
    );
};

const mapDispatchToProps = dispatch => {
    return {
        removePost: (index) => dispatch({type: REMOVE_POST, payload: {index}}),
        editPost: (input, index) => dispatch({type: EDIT_POST, payload: {...input, index}})
    }
}


export default connect(null, mapDispatchToProps)(Post);