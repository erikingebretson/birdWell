import { RECEIVE_ALL_PRODUCT, RECEIVE_PRODUCT } from '../actions/product_actions'
import { RECEIVE_REVIEW } from '../actions/review_actions'

const productReducer = (oldState={}, action) => {
    Object.freeze(oldState)
    let newState = Object.assign({}, oldState)
    switch(action.type) {
        case RECEIVE_PRODUCT:
            newState[action.product.id] = action.product
            return newState
        case RECEIVE_ALL_PRODUCT:
            return action.products
        case RECEIVE_REVIEW:
            newState[action.review.productId].reviews.push(action.review)
            return newState
        default:
            return oldState
    }
}

export default productReducer;