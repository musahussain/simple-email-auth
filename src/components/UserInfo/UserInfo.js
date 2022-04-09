import React from 'react';

const UserInfo = ({user}) => {
    return (
        <div>
            <h1>{user.displayName}</h1>
            <h1>{user.email}</h1>
            <h1>Provider: {user.providerId}</h1>
        </div>
    );
};

export default UserInfo;