import React, { useContext } from 'react'
import './ChatTitle.css'

import profesorContext from "../../../context/professor/profesorContext";

const ChatTitle = () => {
    const { professor } = useContext(profesorContext); 
    return (
        <div id="chat-title">
            <span>{professor && professor['fullName']}</span>
            <img src={require("../../../assets/trash-logo.svg")} alt="Delete Conversation" />
        </div>
    )
}

export default ChatTitle;
