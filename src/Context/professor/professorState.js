
import React, { useReducer } from 'react'
import profesorContext from './profesorContext'
import professorReducer from './professorReducer';
import { SET_PROFESSOR } from '../Type';

function ProfessorState(props) {

    const initialState = {
        professor: null
    }

    const [state, dispatch] = useReducer(professorReducer, initialState);

    const setProfessor = professorData => {
        dispatch({
            type: SET_PROFESSOR,
            payload: professorData
        });
    }

    return (
        <profesorContext.Provider
            value={{
                professor: state.professor,
                setProfessor
            }}
        >
            {props.children}
        </profesorContext.Provider>
    );
}

export default ProfessorState