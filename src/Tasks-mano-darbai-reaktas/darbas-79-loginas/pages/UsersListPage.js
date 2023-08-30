import React from 'react';
import SingleUser from "../components/SingleUser";

const UsersListPage = ({users}) => {
    return (
        <div className="d-flex wrap">
            {users.map((x, i) => <SingleUser user={x} key={i}/>)}
        </div>
    );
};

export default UsersListPage;