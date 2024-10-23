import React from 'react';

import UserItem from './UserItem';
import Card from '../../shared/components/UIElements/Card';
import './UsersList.css';
import Table from '../../shared/components/Navigation/table';
const UsersList = props => {

    const columns = [
        { Header: 'ID', accessor: 'id' },
        { Header: 'Name', accessor: 'name' },
        { Header: 'Email', accessor: 'email' },
        { Header: 'Age', accessor: 'age' },
        // { Header: 'Action', accessor: 'action' },
    ];

    const data = [
        { id: 1, name: 'Alice', email: 'alice@example.com', age: 25  },
        { id: 2, name: 'Bob', email: 'bob@example.com', age: 30  },
        { id: 3, name: 'Charlie', email: 'charlie@example.com', age: 35  },
        { id: 4, name: 'Alice', email: 'alice@example.com', age: 25  },
        { id: 5, name: 'Bob', email: 'bob@example.com', age: 30  },
        { id: 6, name: 'Charlie', email: 'charlie@example.com', age: 35  },
        { id: 7, name: 'Alice', email: 'alice@example.com', age: 25  },
        { id: 8, name: 'Bob', email: 'bob@example.com', age: 30  },
        { id: 9, name: 'Charlie', email: 'charlie@example.com', age: 35  },
        { id: 10, name: 'Charlie', email: 'charlie@example.com', age: 35  },
    ];



    if (props.items.length === 0) {
        return (
            <div>
                <h2>No Users Found.</h2>
            </div>
        );
    }

    return (
        <>
            {/* <ul>
                {props.items.map(user => (
                    <UserItem
                        key={user.id}
                        id={user.id}
                        image={user.image}
                        name={user.name} />
                ))}
            </ul> */}
            <div className="tableOuter">
                <Table data={data} columns={columns} />
            </div>
        </>
    );
};

export default UsersList;