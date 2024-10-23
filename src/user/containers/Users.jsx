import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
    const USERS = [
        { id: 1, name: 'Chris Jonna', image: 'https://cmprealestategroup.com/wp-content/uploads/2020/04/christopher-j.jpg' }
    ]
    return <UsersList items={USERS} />;
};

export default Users;