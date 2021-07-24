import React, { useState } from 'react'
import "./ChatRoom.css";
import { DefaultButton } from '@fluentui/react/lib/Button';
import firebase from "firebase";
import { db } from '../../firebase';

function ChatInput({ chatRef, channelName, channelId }) {
    const [input, setInput] = useState("");
    const sendMessage = e => {
        e.preventDefault();

        if (!channelId) {
            return false;
        }

        db.collection("rooms").doc(channelId).collection("message").add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            user: "Tanisha",
            userImage: "https://www.bollywoodhungama.com/wp-content/uploads/2020/07/Alia-Bhatt-must-speak-up-now-as-trolling-gets-intense.jpeg"
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
