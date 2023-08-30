import React from 'react';
import SinglePost from "./SinglePost";

const AllPosts = ({posts, addPost, added}) => {

    return (
        <div className="cont">
            {posts.map(x => <SinglePost addPost={addPost} added={added} add={true} post={x} key={x.id}/>)}
        </div>
    );
};

export default AllPosts;
