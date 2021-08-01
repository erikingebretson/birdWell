import * as SessionApiUtl from '../util/session_api_util'

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const REMOVE_CURRENT_USER = 'REMOVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

export const receiveCurrentUser = (currentUser) => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
})

export const removeCurrentUser = (userId) => ({
    type: REMOVE_CURRENT_USER,
    userId
})

export const receiveSessionErrors = (errors) => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
})

export const signup = (user) => (dispatch) => (
    SessionApiUtl.signup(user) 
        .then(res => dispatch(receiveCurrentUser(res)),
        err => dispatch(receiveSessionErrors(err))
    )
)

export const login = (user) => (dispatch) => (
    SessionApiUtl.signup(user)
        .then(res => dispatch(receiveCurrentUser(res)),
        err => dispatch(receiveSessionErrors(err))
    )
)

export const logout = (userId) => (dispatch) => (
    SessionApiUtl.logout(userId)
    .then( () => dispatch(removeCurrentUser(userId)))
)