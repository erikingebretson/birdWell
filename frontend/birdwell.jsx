import React from 'react';
import ReactDOM from 'React-dom';
import { signup, login, logout } from './actions/session_actions';
import Root from './components/root'
import configureStore from './store/store';

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById('root')
    let store = configureStore();

    //ONLY FOR TESTING
    window.signup = signup
    window.login = login
    window.logout = logout
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    //REMOVE WHEN DONE WITH TESTING

    ReactDOM.render(<Root store={store} />, root)
})