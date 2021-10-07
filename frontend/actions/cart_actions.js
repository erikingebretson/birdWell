import * as CartApiUtil from '../util/cart_api_util'

export const RECEIVE_CART = "RECEIVE_CART"
export const RECEIVE_SHARED_CART = "RECEIVE_SHARED_CART"
export const REMOVE_CART = "REMOVE_CART"

export const receiveCart = (cart) => ({
    type: RECEIVE_CART,
    cart
})

export const receiveSharedCart = (cart) => ({
    type: RECEIVE_SHARED_CART,
    cart
})

export const removeCart = (cartId) => ({
    type: REMOVE_CART,
    cartId
})

export const createCart = (cart) => (dispatch) => (
    CartApiUtil.createCart(cart)
    .then( res => dispatch(receiveCart(res)))
)

export const fetchCart = (cartId) => (dispatch) => (
    CartApiUtil.fetchCart(cartId)
    .then(res => dispatch(receiveCart(res)))
)

export const fetchSharedCart = (cartId) => (dispatch) => (
    CartApiUtil.fetchCart(cartId)
        .then(res => dispatch(receiveCart(res)))
)

export const updateCart = (cart) => (dispatch) => (
    CartApiUtil.updateCart(cart)
    .then( res => dispatch(receiveCart(res)))
)

export const deleteCart = (cartId) => (dispatch) => (
    CartApiUtil.deleteCart(cartId)
    .then( () => dispatch(deleteCart(cartId)))
)