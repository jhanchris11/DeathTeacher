import React, { useState, useContext, useEffect } from 'react'
import './ChatForm.css'
import { teacherBot } from '../../../services/botService'
import { dateNow } from '../../../helpers/dateHelper'
import { v4 as uuidv4 } from 'uuid';
import messageBotContext from '../../../context/messageBot/messageBotContext';
import { speechTextSlider } from '../../../helpers/speechHelper';

const ChatForm = () => {

    const [description, setDescription] = useState({
        question: '',
    })

    const { messageList, setMessageList, disableBot, setDisable, beginAudio, finishAudio, setBeginAudio, setFinishAudio } = useContext(messageBotContext);

    useEffect(() => {
        if (disableBot === false) {
            getTeacherBot()
            setDisable(true)
        }
    }, [messageList])

    useEffect(() => {
        if (beginAudio) {
            setBeginAudio(false)
        }
    }, [beginAudio])

    useEffect(() => {
        if (finishAudio) {
            setFinishAudio(false)
        }
    }, [finishAudio])

    let getTeacherBot = async () => {
        const { data } = await teacherBot(description)
        setBeginAudio(true)
        await speechTextSlider(data.message)
        setFinishAudio(true)

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
