import React from 'react';
import { Link } from 'react-router-dom';

import Avatar from '../../shared/components/UIElements/Avatar';
import Card from '../../shared/components/UIElements/Card';

import './UserItem.css';

const UserItem = props => {
    console.log(props);
    return (
        <li>
            <div>
                <Link to={`/${props.id}/locations`}>
                    <div>
                        <Avatar image={props.image} alt={props.name} />
                    </div>
                    <div>
                        <h2>{props.name}</h2>
                    </div>
                </Link>
            </div>
        </li>
    );
};

export default UserItem;