import React from 'react';
import {Link} from "react-router-dom";


const Toolbar = () => {
    return (
        <div className="toolbar d-flex">
            <Link to="/">Index Page</Link>
            <Link to="/home">Home Page</Link>
            <Link to="/products">Products</Link>

        </div>
    );
};

export default Toolbar;
