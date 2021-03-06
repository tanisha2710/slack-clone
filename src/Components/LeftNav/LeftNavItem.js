import React from 'react'
import { Icon } from '@fluentui/react/lib/Icon';
import "./LeftNav.css";
import { db } from '../../firebase';
import { useDispatch } from 'react-redux';
import { roomSelected } from '../../features/appSlice';

function LeftNavItem({ iconName, title, addChannelOption, id }) {
    const dispatch = useDispatch();
    const addChannel = () => {
        const channelName = prompt("enter channel name");
        if (channelName) {
            db.collection('rooms').add({
                name: channelName
            })
        }
     };
    
    const selectChannel = () => {
        if (id) {
            dispatch(roomSelected({
                roomId: id,
            }))
        }
     };

    return (
        <div onClick={addChannelOption ? addChannel : selectChannel}className="itemContainer">
            {iconName && <Icon style={{ padding: 10, fontSize: "small" }} iconName={iconName} />}
            {iconName ? (
                <h3>{title}</h3>
            ) : (
                <h3 className="itemChannelTitle">
                    <span>#</span>
                    {title}
                </h3>
            )}
        </div>
    )
}

export default LeftNavItem
