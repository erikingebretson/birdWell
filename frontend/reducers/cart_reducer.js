import { RECEIVE_CART, REMOVE_CART } from "../actions/cart_actions"
import { RECEIVE_CURRENT_USER } from "../actions/session_actions"

const cartReducer = (oldState={}, action) => {
    Object.freeze(oldState)
    let newState = Object.assign({}, oldState)
    switch(action.type) {
        case RECEIVE_CURRENT_USER:
            console.log(action.currentUser)
            newState[action.currentUser.cart.id] = action.currentUser.cart

            return newState
        case RECEIVE_CART:
            newState[action.cart.id] = action.cart
            return newState
        case REMOVE_CART:
            delete newState[action.cartId]
            return newState
        default:
            return oldState
    }
}

export default cartReducer;