import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Tasks-mano-darbai-reaktas/zaidimas-monopolis/App.js';

import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";
import playerReducer from "./features/player"


const store = configureStore({
    reducer: {
        player: playerReducer,

    }
})


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App/>
    </Provider>
);