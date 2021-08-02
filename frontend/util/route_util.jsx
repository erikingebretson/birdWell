import React from 'react';
import { Redirect, Route, withRouter } from "react-router-dom";
import { connect } from 'react-redux';


const Auth = ({ component: Component, path, loggedIn, exact }) => (
    <Route path={path} exact={exact} render={props => (
        !loggedIn ? (<Component {...props} />) : (<Redirect to='/account' />)
    )} />
)

const Protected = ({ component: Component, path, loggedIn, exact }) => (
    <Route path={path} exact={exact} render={props => (
        loggedIn ? (<Component {...props} />) : (<Redirect to="/account/login" />)
    )} />
)

const mSTP = (state) => ({
    loggedIn: Boolean(state.session.id)
})

export const AuthRoute = withRouter(
    connect(mSTP, null)(Auth)
);

export const ProtectedRoute = withRouter(
    connect(mSTP, null)(Protected)
);