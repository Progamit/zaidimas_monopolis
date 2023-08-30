import React, {useState, useEffect} from 'react';

const ProgressBar = ({posts}) => {

    const [color, setColor] = useState("green")


    useEffect(() => {

        if(posts.length <= 3) {
            setColor("green")
        }
        if(posts.length > 3) {
            setColor("yellow")
        }
        if(posts.length > 6) {
            setColor("orange")
        }
        if(posts.length > 8) {
            setColor("red")
        }

    }, [posts])


    return (
        <div className="progress d-flex flex-column flex-end">
            <div style={{height: posts.length * 10 + "%", backgroundColor: color}}></div>
        </div>
    );
};

export default ProgressBar;
