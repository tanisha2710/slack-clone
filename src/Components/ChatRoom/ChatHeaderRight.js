import React from 'react'
import "./ChatRoom.css";
import { Icon } from '@fluentui/react/lib/Icon';

export default function ChatHeaderRight() {
    return (
        <div className="chatHeaderRight">
            <p>
                <Icon  className="infoIcon" className="infoIcon" iconName="Info" />
                Details
            </p>
        </div>
    )
}
