
import React from 'react';

const UsersListInChat = ({users, setWith, me}) => {
    return (
        <div className="d-flex flex-column users">

            {users.map((x, i) =>

                    x.username !== me.username && <div key={i} onClick={() => setWith(x.username)}>
                        <b>{x.username}</b>
                    </div>
            )}

        </div>
    );
};

export default UsersListInChat;