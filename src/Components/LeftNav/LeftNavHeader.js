import React from 'react'
import "./LeftNav.css";
import { Icon } from '@fluentui/react/lib/Icon';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase';

function LeftNavHeader() {
    const [user] = useAuthState(auth);
    return (
        <div className="leftNavHeaderContainer">
            <div className="headerInfo">
                <h2>React Channel</h2>
                <h3>
                    <Icon className="presenceIconStyle"iconName="CircleShapeSolid" />
                    {user.displayName}
                </h3>
            </div>
            <Icon className="MessageIconStyle" iconName="EditSolid12" />
        </div>
    )
}

export default LeftNavHeader
