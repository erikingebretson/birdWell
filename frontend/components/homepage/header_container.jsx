import React from 'react';
import { connect } from 'react-redux';
import Header from './header';
import { logout } from '../../actions/session_actions'
import { fetchAllProduct } from '../../actions/product_actions';
import { fetchCart } from '../../actions/cart_actions';

const mSTP = (state) => ({
    currentUser: state.entities.users[state.session.id],
    cart: state.entities.cart
})

const mDTP = (dispatch) => ({
    logout: () => dispatch(logout()),
    fetchCart: (userId) => dispatch(fetchCart(userId))
})

export default connect(mSTP, mDTP)(Header)