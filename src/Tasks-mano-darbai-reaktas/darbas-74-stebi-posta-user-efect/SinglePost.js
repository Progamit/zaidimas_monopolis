import React from 'react';

const SinglePost = ({post, add, addPost, removePost, added}) => {
    return (
        <div className="post">
            <h1>{post.title}</h1>
            <p>{post.body}</p>

            {add && added.length < 10 && <button onClick={() => addPost(post)}>ADD THIS POST</button>}
            {!add && <button onClick={removePost}>REMOVE POST</button>}

        </div>
    );
};

export default SinglePost;
