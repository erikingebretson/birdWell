import { RECEIVE_CURRENT_USER, REMOVE_CURRENT_USER  } from "../actions/session_actions";

const _nullUser = {
    id: null
}

const sessionsReducer = (oldState=_nullUser, action) => {
    Object.freeze(oldState)
    let newState = Object.assign({}, oldState)
    switch(action.type) {
        case RECEIVE_CURRENT_USER:
            newState.id = action.currentUser.id
            return newState
        case REMOVE_CURRENT_USER:
            return _nullUser
        default:
            return oldState
    }
}

export default sessionsReducer;