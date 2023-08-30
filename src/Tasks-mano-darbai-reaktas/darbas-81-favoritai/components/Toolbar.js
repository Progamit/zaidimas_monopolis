import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {useHref} from "react-router-dom";

const Toolbar = () => {

    const favorites = useSelector(state => state.user.favorites)
    const href = useHref()

    console.log(href)

    return (
        <div className="toolbar">
            {href === "/"?
                <Link to="/favorites">Favorites {favorites.length}</Link> :
                <Link to="/">All Users Page</Link>
            }
        </div>
    );
};

export default Toolbar;




