import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const divRoot = document.querySelector('#root')

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>, divRoot)
