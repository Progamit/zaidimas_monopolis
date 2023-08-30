import react from 'react';

const SinglePost = ({post}) => {
    return (
        <div className="post">
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </div>
    );
};
export default SinglePost;
