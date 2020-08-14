import React, { useReducer } from "react";
import contextSpinner from "./spinnerContext";
import spinnerReducer from "./spinnerReducer";
import { SET_LOADING } from "../Type";

function SpinnerState(props) {
  const initialState = {
    loading: false
  };

  const [state, dispatch] = useReducer(spinnerReducer, initialState);

  const setLoading = data => {
    dispatch({
      type: SET_LOADING,
      payload: data
    });
  };

  return (
    <contextSpinner.Provider
      value={{
        loading: state.loading,
        setLoading
      }}
    >
      {props.children}
    </contextSpinner.Provider>
  );
}

export default SpinnerState;
