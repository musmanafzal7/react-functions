import React from 'react';
import { useState } from 'react';
import SidebarLogo from '../../../../public/images/sidebar-icon.png';

import './MainHeader.css'

const MainHeader = props => {

    return (
        <header className="main-header">
            {props.children}
        </header>
    )

}

export default MainHeader;