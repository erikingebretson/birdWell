import React from 'react';
import AccountForms from './account/account_forms';
import AccountPage from './account/account_show_container'
import ShoeShow from './product/shoes_show/shoe_show_container'
import Header from './homepage/header_container'
import { AuthRoute, ProtectedRoute } from '../util/route_util'
import { Route } from 'react-router-dom'
import ShoeIndex from './product/shoes_index/shoe_index_container';

class App extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <Header />
                <ProtectedRoute exact path='/account' component={AccountPage} />
                <AuthRoute exact path='/account/login' component={AccountForms} />
                <Route exact path='/shoes/:shoeId' component={ShoeShow} />
                <Route exact path='/shoes' component={ShoeIndex} />
                
            </div>
        )
    }
}

export default App;