import React, {useState} from 'react';
import {connect} from "react-redux"
import {ADD_POST} from "../store/actionTypes"

const AddPost = ({addPost}) => {
    const [input, setInput] = useState({title: '', author: '', text: ''})

    const onChangeHandler = ({target}) => {
        setInput({...input, [target.name]: target.value})
    }

    return (
        <div className="post-submit">
            <input type="text" name="title" placeholder="type title" onChange={event => onChangeHandler(event)}
                   value={input.title}/>
            <input type="text" name="author" placeholder="type author" onChange={event => onChangeHandler(event)}
                   value={input.author}/>
            <textarea name="text" placeholder="type text" onChange={event => onChangeHandler(event)}
                      value={input.text}/>
            <button onClick={() => {
                if (input.title.trim() !== '' && input.author.trim() !== '' && input.text.trim() !== '') {
                    addPost(input)
                    setInput({title: '', author: '', text: ''})
                }
            }}>Add Post
            </button>
        </div>
    );
};

const mapDispatchToProps = dispatch => {
    return {
        addPost: (input) => dispatch({type: ADD_POST, payload: {...input}})
    }
}

export default connect(null, mapDispatchToProps)(AddPost);