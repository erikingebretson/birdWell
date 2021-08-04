import React from 'react';
import { connect } from 'react-redux';
import Header from './header';
import { logout } from '../../actions/session_actions'
import { fetchAllProduct } from '../../actions/product_actions';

const mSTP = (state) => ({
    currentUser: state.entities.users[state.session.id]
})

const mDTP = (dispatch) => ({
    logout: () => dispatch(logout())
})

export default connect(mSTP, mDTP)(Header)