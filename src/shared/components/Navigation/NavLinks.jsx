import React from "react";
import { NavLink } from "react-router-dom";

import './NavLinks.css';

const NavLinks = props => {
    return <ul className="">
        <li><NavLink to='/'>Users</NavLink></li>
        <li><NavLink to='/locations'>Locations</NavLink></li>
        <li><NavLink to='/locations/new'>Add Location</NavLink></li>
        <li><NavLink to='/shifts'>Shifts</NavLink></li>
        <li><NavLink to='/auth'>Login</NavLink></li>
    </ul>
};

export default NavLinks;