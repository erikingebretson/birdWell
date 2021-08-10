import { RECEIVE_CART, REMOVE_CART } from "../actions/cart_actions";
import { RECEIVE_CURRENT_USER, REMOVE_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_PRODUCT, REMOVE_PRODUCT } from "../actions/product_actions";

const cartReducer = (oldState={ products: {} }, action) => {
    Object.freeze(oldState)
    let newState = Object.assign({}, oldState)
    switch(action.type) {
        case RECEIVE_CURRENT_USER:
            newState = action.currentUser.cart
            newState.products = {}
            return newState;
        case REMOVE_CURRENT_USER:
            return {};
        case RECEIVE_CART:
            // console.log(action.cart)
            newState = action.cart
            let temp = action.cart.products
            newState.products = {}
            // console.log(temp)
            temp.forEach( prod => {
                newState.products[prod.id] = prod
            })
            console.log(newState)

            // for (const iter in action.cart.products) {
            //     newState.products[iter.id] = iter
            // }
            return newState
        case REMOVE_PRODUCT: 
            delete newState.products[action.productId]
            return newState
        case RECEIVE_PRODUCT:
            newState.products[action.product.id] = action.product
            return newState
        case REMOVE_CART:
            delete newState[action.cartId]
            return {};
        default:
            return oldState
    }
}

export default cartReducer;