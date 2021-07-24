import React from 'react'
import "./ChatRoom.css";
import ChatHeaderLeft from './ChatHeaderLeft';
import ChatHeaderRight from './ChatHeaderRight';

function ChatHeader({channelName}) {
    return (
        <div className="chatHeaderContainer">
            <ChatHeaderLeft channelName={channelName}/>
            <ChatHeaderRight />
            
        </div>
    )
}

export default ChatHeader
