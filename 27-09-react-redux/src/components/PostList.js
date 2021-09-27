import React from 'react';
import {connect} from "react-redux"

import Post from "./Post"

const PostList = ({posts}) => {
    return (
        <ul className="post-list">
            {posts.map((post, index) => <Post key={index} post={post} index={index}/>)}
        </ul>
    );
};

const mapStateToProps = state => {
    return {
        posts: [...state.posts]
    }
}

export default connect(mapStateToProps, null)(PostList);