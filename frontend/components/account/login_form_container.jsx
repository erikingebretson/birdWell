import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions'
import loginForm from './login_form';

const mSTP = (state) => ({
    user: {
        first_name: '',
        last_name: '',
        email: '',
        password: '',
    },
    errors: state.errors.sessionErrors,
    class: 'login-form',
    formHeader: 'LOGIN',
    formEvent: 'Sign In'
})

const mDTP = (dispatch) => ({
    formAction: user => dispatch(login(user))
})

export default connect(mSTP, mDTP)(loginForm)