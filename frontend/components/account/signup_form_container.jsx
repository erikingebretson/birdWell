import React from 'react';
import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions'
import sessionForm from './session_form';

const mSTP = (state) => ({
    user: {
        username: '',
        email: '',
        password: ''
    },
    formEvent: 'Register'
})

const mDTP = (dispatch) => ({
    formAction: user => dispatch(signup(user))
})

export default connect(mSTP, mDTP)(sessionForm)