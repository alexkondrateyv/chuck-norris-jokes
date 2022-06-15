import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import App from './App';

import {createStore} from "redux";
import {Provider} from "react-redux";

const reducer = (state = {categories: ['random'], joke: ''}, action) => {
    switch (action.type) {
        case 'UPDATE_CATEGORIES':
            return {...state, categories: [...state.categories, ...action.data]}
        case 'UPDATE_JOKE':
            return {...state, joke: action.data}
        default:
            return state
    }
}
const store = createStore(reducer)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App/>
    </Provider>
);