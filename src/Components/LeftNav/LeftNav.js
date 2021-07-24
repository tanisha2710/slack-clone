import React from 'react'
import "./LeftNav.css";
import LeftNavHeader from './LeftNavHeader';
import LeftNavItems from './LeftNavItems';

function LeftNav() {
    return (
        <div className="leftNavContainer">
            <LeftNavHeader />
            <LeftNavItems />
        </div>
    )
}

export default LeftNav
