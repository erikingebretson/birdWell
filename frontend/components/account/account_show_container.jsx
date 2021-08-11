import React from 'react';
import { connect } from 'react-redux';
import accountPage from './account_show';
import { logout } from '../../actions/session_actions';
import { fetchCart, updateCart, deleteCart } from '../../actions/cart_actions';
import { updateProduct } from '../../actions/product_actions'; 

const mSTP = (state) => ({
    currentUser: state.entities.users[state.session.id],
    cart: state.entities.cart
})

const mDTP = (dispatch) => ({
    logout: userId => dispatch(logout(userId)),
    fetchCart: cartId => dispatch(fetchCart(cartId)),
    updateCart: cart => dispatch(updateCart(cart)),
    deleteCart: cartId => dispatch(deleteCart(cartId)),
    updateProduct: prod => dispatch(updateProduct(prod))
})

export default connect(mSTP,mDTP)(accountPage)