import React from 'react'
import { Icon } from '@fluentui/react/lib/Icon';
import "./Header.css";

function HeaderMiddle() {
    return (
        <div className="headerMiddlerContainer">
            <Icon iconName="Search" />
            <input placeholder="Search" />
        </div>
    )
}

export default HeaderMiddle
