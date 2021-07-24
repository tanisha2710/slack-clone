import React, { useRef, useEffect } from 'react'
import "./ChatRoom.css";
import ChatHeader from './ChatHeader';
import { useSelector } from 'react-redux';
import { selectRoomId } from '../../features/appSlice';
import ChatInput from './ChatInput';
import { useCollection, useDocument } from 'react-firebase-hooks/firestore';
import { db } from '../../firebase';
import Message from './Message';

function ChatRoom() {
    const chatRef = useRef(null);
    const roomId = useSelector(selectRoomId);
    const [roomDetails] = useDocument(
        roomId && db.collection("rooms").doc(roomId)
    )
    const [roomMessages, loading] = useCollection(
        roomId &&
        db
            .collection("rooms")
            .doc(roomId)
            .collection("message")
            .orderBy("timestamp", "asc")
    )

    useEffect(() => {
        chatRef ?.current ?.scrollIntoView({
            behavior:"smooth",
        });
    },[roomId,loading])

    return (
        <div className="chatContainer">
            {roomDetails && roomMessages && (
                <>
                <ChatHeader channelName={roomDetails?.data().name}/>
                    <div className="chatMessages">
                        {roomMessages?.docs.map(doc => {
                            const { message, timestamp, user, userImage } = doc.data();
                            return (
                                <Message
                                    key={doc.id}
                                    message={message}
                                    timestamp={timestamp}
                                    user={user}
                                    userImage={userImage}
                                />
                            )
                        })}
                        <div ref ={chatRef} className="chatBottom"></div>
                    </div>
                <ChatInput chatRef={chatRef} channelName={roomDetails?.data().name} channelId={roomId} />
                </>
            )}
        </div>
    )
}

export default ChatRoom
