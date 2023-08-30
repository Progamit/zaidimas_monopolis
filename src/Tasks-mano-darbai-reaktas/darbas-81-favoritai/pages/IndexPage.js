import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux"
import {setAllUsers} from "../features/user";
import SingleUser from "../components/SingleUser";

const IndexPage = () => {

    const dispatch = useDispatch()
    const users = useSelector(state => state.user.allUsers)

    console.log(users)

    useEffect(() => {

        fetch("https://dummyjson.com/users")
            .then(res => res.json())
            .then(data => {
                dispatch(setAllUsers(data.users))
            })

    }, [])

    return (
        <div className="d-flex wrap">
            {users.map(x => <SingleUser user={x} key={x.id}/>)}
        </div>
    );
};

export default IndexPage;
