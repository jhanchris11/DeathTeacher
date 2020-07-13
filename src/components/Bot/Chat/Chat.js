import React from 'react'
import ChatTitle from '../ChatTitle/ChatTitle'
import ChatForm from '../ChatForm/ChatForm'
import MessageList from '../Message/MessageList'
import './Chat.css'
const Chat = () => {
    return (
        <div id='chat-container'>
            <ChatTitle />
            <MessageList />
            <ChatForm />
        </div>
    )
}

export default Chat
