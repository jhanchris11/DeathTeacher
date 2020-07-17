
import React, { useReducer } from 'react'
import contextMessage from './ContextMessage'
import reducerMessage from './MessageReducer'
import { v4 as uuidv4 } from 'uuid'
import { SET_MESSAGE_LIST, SET_DISABLE, SET_INPUT } from './Type';
import { dateNow } from '../Helpers/DateNow';

/*State global , no va a cambiar , almacenar la data del estado */
function MessageState(props) {

    const initialState = {

        messageList: [{
            id: uuidv4(),
            type: 'message-row you-message',
            message: 'Hola',
            date: dateNow() ,
            bot:'bot1'
        }],
        disableBot: true,
        searchInput: ''
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

    return (
        <contextMessage.Provider
            value={{
                messageList: state.messageList,
                setMessageList,
                disableBot: state.disableBot,
                setDisable,
                searchInput: state.searchInput,
                setSearchInput
            }}
        >
            {props.children}
        </contextMessage.Provider>
    );
}

export default MessageState