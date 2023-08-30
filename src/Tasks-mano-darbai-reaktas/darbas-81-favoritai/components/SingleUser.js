import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addFavorite, removeFavorite} from "../features/user";

const SingleUser = ({user}) => {

    const favorites = useSelector(state => state.user.favorites)
    const userInFavorites = favorites.find(x => x.id === user.id)

    const dispatch = useDispatch()

    function addUser() {
        dispatch(addFavorite(user))
    }
    function removeUser() {
        dispatch(removeFavorite(user.id))
    }

    return (
        <div className="user text-center">
            <img src={user.image} alt=""/>
            <b>{user.username}</b>
            <div>
                {userInFavorites ?
                    <button onClick={removeUser}>Remove from favorites</button>:
                    <button onClick={addUser}>Add To Favorites</button>
                }
            </div>
        </div>
    );
};

export default SingleUser;