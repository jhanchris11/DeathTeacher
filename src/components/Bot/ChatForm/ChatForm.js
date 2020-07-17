import React, { useState, useContext, useEffect } from 'react'
import './ChatForm.css'
import { teacherBot } from '../../../services/BotService'
import { dateNow } from '../../../Helpers/DateNow'
import { v4 as uuidv4 } from 'uuid';
import ContextMessage from '../../../Context/ContextMessage';

const ChatForm = () => {

    const [description, setDescription] = useState({
        question: '',
    })

    const { messageList, setMessageList, disableBot, setDisable } = useContext(ContextMessage)

    useEffect(() => {
        if (disableBot === false) {
            getTeacherBot()
            setDisable(true)
        }
    }, [messageList])


    let getTeacherBot = async () => {
        const { data } = await teacherBot(description)
        console.log(data)
        setDescription({
            question: ''
        })

        data['id'] = uuidv4()

        setMessageList([...messageList, ...[
            data
        ]])

        //funcion de voz , pasarle la data
    }

    const handlerInput = (e) => {
        setDescription({
            [e.target.name]: e.target.value
        })
    }


    const handlerSubmit = async (e) => {
        e.preventDefault()
        setDisable(false)
        setMessageList([...messageList, ...[{
            id: uuidv4(),
            type: 'message-row other-message',
            message: description.question,
            date: dateNow(),
            bot: 'person'
        }]])
    }

    return (
        <div id="chat-form">
            <img src={require("../../../assets/attachment-logo.svg")} alt="Add Attachment" />
            <form onSubmit={handlerSubmit}>
                <input
                    type="text"
                    placeholder="Escriba su mensaje"
                    value={description.question}
                    name='question'
                    onChange={handlerInput}
                />
            </form>
        </div>
    )
}

export default ChatForm
