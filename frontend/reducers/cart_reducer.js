import { RECEIVE_CART, REMOVE_CART } from "../actions/cart_actions";
import { RECEIVE_CURRENT_USER, REMOVE_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_PRODUCT, REMOVE_PRODUCT } from "../actions/product_actions";
import { isPlainObject } from "lodash";

const cartReducer = (oldState={ products: {} }, action) => {
    Object.freeze(oldState)
    let newState = Object.assign({}, oldState)
    switch(action.type) {
        // case RECEIVE_CURRENT_USER:
        //     newState = action.currentUser.cart
        //     newState.products = {}
        //     return newState;
        case REMOVE_CURRENT_USER:
            return { products: {} };
        case RECEIVE_CART:
            newState = action.cart
            let temp = action.cart.products
            newState.products = {}
            temp.forEach( prod => {
                newState.products[Object.values(prod)[0].id] = Object.values(prod)[0]
            })
            return newState
        case REMOVE_PRODUCT: 
            delete newState.products[action.productId]
            return newState
        case RECEIVE_PRODUCT:
            newState.products[action.product.id] = action.product
            // debugger
            return newState
        case REMOVE_CART:
            delete newState[action.cartId]
            return {};
        default:
            return oldState
    }
}

export default cartReducer;