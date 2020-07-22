import { SET_MESSAGE_LIST, SET_DISABLE, SET_INPUT, SET_BEGIN, SET_FINISH, SET_FINISH_CLASS, SET_CLASS_TEXT } from "./Type";

export default (state, action) => {
  switch (action.type) {
    case SET_MESSAGE_LIST:
      return {
        ...state,
        messageList: action.payload
      };
    case SET_DISABLE:
      return {
        ...state,
        disableBot: action.payload
      };
    case SET_INPUT:
      return {
        ...state,
        searchInput: action.payload
      };
    case SET_BEGIN:
      return {
        ...state,
        beginAudio: action.payload
      };
    case SET_FINISH:
      return {
        ...state,
        finishAudio: action.payload
      };
    case SET_FINISH_CLASS:
      return {
        ...state,
        finishClass: action.payload
      };
    case SET_CLASS_TEXT:
      return {
        ...state,
        classText: action.payload
      };
    default:
      return state;
  }
};
