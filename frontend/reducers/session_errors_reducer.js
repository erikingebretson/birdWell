import { RECEIVE_CURRENT_USER, RECEIVE_SESSION_ERRORS, REMOVE_CURRENT_USER } from "../actions/session_actions";

const sessionErrorsReducer = (oldstate=[], action) => {
    Object.freeze(oldstate)
    switch(action.type) {
        case RECEIVE_CURRENT_USER:
            return [];
        case RECEIVE_SESSION_ERRORS:
            return action.errors.responseJSON;
        default:
            return [];
    }
}

export default sessionErrorsReducer;