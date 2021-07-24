import React from 'react'
import "./ChatRoom.css";
import { Icon } from '@fluentui/react/lib/Icon';

function ChatHeaderLeft({channelName}) {
    return (
        <div className="chatHeaderLeft">
            <h4>
                <strong>#{channelName}</strong>
            </h4>
            <Icon iconName="FavoriteStar" />
        </div>
    )
}

export default ChatHeaderLeft
