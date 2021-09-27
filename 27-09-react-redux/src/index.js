import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from "react-redux"
import postStore from "./store/postStore"

ReactDOM.render(
    <React.StrictMode>
        <Provider store={postStore}>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
