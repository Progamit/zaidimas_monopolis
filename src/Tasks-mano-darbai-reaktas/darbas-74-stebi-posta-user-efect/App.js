import './App.css';
import {useState, useEffect, useRef} from "react";

import AllPosts from "./AllPost.js";
import ProgressBar from "./ProgresBar.js";
import AddedPosts from "./AddedPost.js";

function App() {
    const [posts, setPosts] = useState([])
    const [added, setAdded] = useState([])

    useEffect(() => {
        fetch("https://dummyjson.com/posts")
            .then(res => res.json())
            .then(data => {
                setPosts(data.posts)
            })
    }, [])

    function addPost(post) {
        if(added.length === 10) return
        setAdded([...added, post])
    }

    function removePost(index) {
        const updatedPosts = added.filter((x, i) => i !== index)
        setAdded([...updatedPosts])
    }

    return (
        <div className="p50 d-flex">

            <div className="grow1">
                <AllPosts added={added} addPost={addPost} posts={posts}/>
            </div>
            <div className="d-flex flex-column">
                <ProgressBar posts={added}/>
            </div>

            <div className="grow1">
                <AddedPosts removePost={removePost} posts={added}/>
            </div>

        </div>
    );
}

export default App;