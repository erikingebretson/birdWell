import { RECEIVE_REVIEW, RECEIVE_REVIEW_ERRORS } from '../actions/review_actions'

const uiErrorsReducer = (oldState = {}, action) => {
    Object.freeze(oldState)
    let newState = Object.assign({}, oldState)
    switch (action.type) {
        case RECEIVE_REVIEW:
            return []
        case RECEIVE_REVIEW_ERRORS:
            return action.errors
        default:
            return []
    }
}

export default uiErrorsReducer;