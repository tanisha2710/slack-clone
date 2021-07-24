import React, { useState } from 'react'
import "./ChatRoom.css";
import { DefaultButton } from '@fluentui/react/lib/Button';
import firebase from "firebase";
import { db, auth } from '../../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

function ChatInput({ chatRef, channelName, channelId }) {
    const [input, setInput] = useState("");
    const [user] = useAuthState(auth)
    const sendMessage = e => {
        e.preventDefault();

        if (!channelId) {
            return false;
        }

        db.collection("rooms").doc(channelId).collection("message").add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            user: user.displayName,
            userImage: user.photoURL,
        });

        chatRef?.current?.scrollIntoView({
            behavior:"smooth",
        });
        setInput("");

    }

    return (
        <div className="chatInputContainer">
            <form>
                <input value={input} onChange={(e) => setInput(e.target.value)} placeholder={`Message #${channelName}`} />
                <DefaultButton type="submit" onClick={sendMessage}>
                    send
                </DefaultButton>
            </form>
        </div>
    )
}

export default ChatInput
