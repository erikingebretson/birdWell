import { RECEIVE_ALL_PRODUCT, RECEIVE_PRODUCT } from '../actions/product_actions'

const productReducer = (oldState={}, action) => {
    Object.freeze(oldState)
    let newState = Object.assign({}, oldState)
    switch(action.type) {
        case RECEIVE_PRODUCT:
            newState[action.product.id] = action.product
            return newState
        case RECEIVE_ALL_PRODUCT:
            return action.products
        default:
            return oldState
    }
}

export default productReducer;