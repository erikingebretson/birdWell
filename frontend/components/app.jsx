import React from 'react';
import AccountForms from './account/account_forms';
import AccountPage from './account/account_show_container'
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
                <ProtectedRoute exact path='/account/' component={AccountPage} />
                <AuthRoute exact path='/account/login' component={AccountForms} />
                
            </div>
        )
    }
}

export default App;