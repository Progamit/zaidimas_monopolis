import React from 'react';
import {useSelector} from "react-redux";
import SingleUser from "../components/SingleUser";

const Favoritespage = () => {
    const users = useSelector(state => state.user.favorites)

    return (
        <div className="d-flex wrap">
            {users.map(x => <SingleUser user={x} key={x.id}/>)}
        </div>
    );
};

export default Favoritespage;
