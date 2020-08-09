
import React, { useReducer } from 'react'
import contextMessage from './ContextMessage'
import reducerMessage from './MessageReducer'
import { v4 as uuidv4 } from 'uuid'
import { SET_MESSAGE_LIST, SET_DISABLE, SET_INPUT, SET_BEGIN, SET_FINISH, SET_FINISH_CLASS,SET_CLASS_TEXT } from './Type';
import { dateNow } from '../Helpers/DateNow';

/*State global , no va a cambiar , almacenar la data del estado */
function MessageState(props) {

    const initialState = {

        messageList: [{
            id: uuidv4(),
            type: 'message-row you-message',
            message: 'Hola',
            date: dateNow(),
            bot: 'bot1'
        }],
        beginAudio: false,
        finishAudio: false,
        disableBot: true,
        searchInput: '',
        finishClass: false,
        classText: null
    }

    const [state, dispatch] = useReducer(reducerMessage, initialState);

    const setMessageList = messageList => {
        dispatch({
            type: SET_MESSAGE_LIST,
            payload: messageList
        });
    }

    const setDisable = disable => {
        dispatch({
            type: SET_DISABLE,
            payload: disable
        });
    }

    const setSearchInput = input => {
        dispatch({
            type: SET_INPUT,
            payload: input
        });
    }
    const setBeginAudio = (isBegin) => {
        dispatch({
            type: SET_BEGIN,
            payload: isBegin
        });
    }
    const setFinishAudio = (isFinish) => {
        dispatch({
            type: SET_FINISH,
            payload: isFinish
        });
    }
    const setFinishClass = (isFinishClass) => {
        dispatch({
            type: SET_FINISH_CLASS,
            payload: isFinishClass
        });
    }
    const setClassText = (classText) => {
        dispatch({
            type: SET_CLASS_TEXT,
            payload: classText
        });
    }


    return (
        <contextMessage.Provider
            value={{
                messageList: state.messageList,
                setMessageList,
                disableBot: state.disableBot,
                setDisable,
                searchInput: state.searchInput,
                setSearchInput,
                beginAudio: state.beginAudio,
                setBeginAudio,
                finishAudio: state.finishAudio,
                setFinishAudio,
                finishClass: state.finishClass,
                setFinishClass,
                classText: state.classText,
                setClassText
            }}
        >
            {props.children}
        </contextMessage.Provider>
    );
}

export default MessageState