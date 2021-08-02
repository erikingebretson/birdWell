import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions'
import sessionForm from './session_form';

const mSTP = (state) => ({
    user: {
        username: '',
        email: '',
        password: ''
    },
    formEvent: 'Sign In'
})

const mDTP = (dispatch) => ({
    formAction: user => dispatch(login(user))
})

export default connect(mSTP, mDTP)(sessionForm)