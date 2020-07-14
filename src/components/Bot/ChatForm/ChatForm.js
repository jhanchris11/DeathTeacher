import React, { useState } from 'react'
import './ChatForm.css'
// import { AiOutlineSend } from '@ant-design/icons'
const ChatForm = ({ setMessage }) => {

    const [description, setDescription] = useState('')

    const handlerInput = (e) => {
        setDescription(e.target.value)
    }
    
    const handlerSubmit = (e) => {
        e.preventDefault()
        setMessage(msg => [description, ...msg])
        setDescription('')
    }

    return (
        <div id="chat-form">
            <img src={require("../../../assets/attachment-logo.svg")} alt="Add Attachment" />
            <form onSubmit={handlerSubmit}>
                <input
                    type="text"
                    placeholder="Escriba su mensaje"
                    value={description}
                    onChange={handlerInput}
                />
            </form>
        </div>
    )
}

export default ChatForm
