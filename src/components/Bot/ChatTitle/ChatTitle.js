import React from 'react'
import './ChatTitle.css'

const ChatTitle = () => {
    return (
        <div id="chat-title">
            <span>Chris :3 </span>
            <img src={require("../../../assets/trash-logo.svg")} alt="Delete Conversation" />
        </div>
    )
}

export default ChatTitle
