import React from 'react'
import './ChatForm.css'
// import { AiOutlineSend } from '@ant-design/icons'
const ChatForm = () => {
    return (
        <div id="chat-form">

            <img src={require("../../../assets/attachment-logo.svg")} alt="Add Attachment" />
            <input type="text" placeholder="Escriba su mensaje" />
        </div>
    )
}

export default ChatForm
