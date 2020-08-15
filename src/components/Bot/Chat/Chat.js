import React from 'react'
import ChatTitle from '../ChatTitle/ChatTitle'
import MessageList from '../Message/MessageList'
import './Chat.css'

const Chat = () => {

    return (
        <div id='chat-container'>
            <ChatTitle />
            <MessageList />
        </div>
    )
}

export default Chat
