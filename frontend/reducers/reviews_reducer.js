import { RECEIVE_ALL_REVIEWS, RECEIVE_REVIEW, RECEIVE_REVIEW_ERRORS } from '../actions/review_actions'

const reviewReducer = (oldState={}, action) => {
    Object.freeze(oldState)
    let newState = Object.assign({}, oldState)
    switch(action.type) {
        case RECEIVE_ALL_REVIEWS:
            return action.reviews
        case RECEIVE_REVIEW:
            newState[action.review.id] = newState.action
            return newState
        default:
            return oldState
    }
}

export default reviewReducer;