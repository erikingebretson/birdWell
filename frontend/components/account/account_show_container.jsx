import React from 'react';
import { connect } from 'react-redux';
import accountPage from './account_show';
import { logout } from '../../actions/session_actions';

const mSTP = (state) => ({
    currentUser: state.entities.users[state.session.id]
})

const mDTP = (dispatch) => ({
    logout: userId => dispatch(logout(userId))
})

export default connect(mSTP,mDTP)(accountPage)