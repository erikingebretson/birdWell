import React from 'react';
import { connect } from 'react-redux';
import accountPage from './account_show';
import { logout } from '../../actions/session_actions';
import { fetchCart } from '../../actions/cart_actions';

const mSTP = (state) => ({
    currentUser: state.entities.users[state.session.id],
})

const mDTP = (dispatch) => ({
    logout: userId => dispatch(logout(userId)),
    fetchCart: cartId => dispatch(fetchCart(cartId))
})

export default connect(mSTP,mDTP)(accountPage)