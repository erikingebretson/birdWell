import React from 'react';
import CreateAccount from './account/signup_form_container'
import Login from './account/login_form_container'
import Header from './homepage/header_container'
import { AuthRoute, ProtectedRoute } from '../util/route_util'

class App extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <Header />
                <ProtectedRoute exact path='/account' component={} />
                <AuthRoute exact path='/account/login' component={Login}
                <CreateAccount />
                <Login />
            </div>
        )
    }
}

export default App;