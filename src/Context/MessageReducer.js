import { SET_MESSAGE_LIST, SET_DISABLE, SET_INPUT } from "./Type";

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
    default:
      return state;
  }
};
