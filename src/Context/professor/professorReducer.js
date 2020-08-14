import { SET_PROFESSOR } from "../Type";

export default (state, action) => {
  switch (action.type) {
    case SET_PROFESSOR:
      return {
        ...state,
        professor: action.payload
      };
    default:
      return state;
  }
};