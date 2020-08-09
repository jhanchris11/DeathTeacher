import React, { Fragment, useContext } from 'react'
import './MessageList.css'
import ChatForm from '../ChatForm/ChatForm'
import ContextMessage from '../../../Context/ContextMessage'


const MessageList = () => {

    const { messageList } = useContext(ContextMessage)
    return (
        <Fragment>
            <ChatForm />
            <div id="chat-message-list">
                {
                    messageList.map(msg => (
                        <div className={msg.type} key={msg.id}>
                            <div className="message-content">
                                <img src={require(`../../../assets/${msg.bot}.png`)} alt='bot'></img>
                                <div className="message-text">{msg.message} </div>
                                <div className="message-time">{msg.date}</div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </Fragment>
    )
}

export default MessageList
