import React from 'react';
import SinglePost from "./SinglePost.js";

const AddedPosts = ({posts, removePost}) => {
    return (
        <div className="cont">
            {posts.map((x, index )=> <SinglePost removePost={() => removePost(index)} add={false} post={x} key={index}/>)}
        </div>
    );
};

export default AddedPosts;
