import './App.css';
import {useState, useEffect} from "react";
import SinglePost from "./SinglePost";
function App(){
    const [post, setPost] =useState([])
    useEffect( () =>{
        fetch("https://dummyjson.com/posts")
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setPost(data.posts)
            })
    }, [])


    return (
        <div className="p50">
            {post.map((x, i) => <SinglePost post={x} key={i}/>)}
        </div>
    );
}
export default App;



