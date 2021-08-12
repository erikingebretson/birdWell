import React from 'react';
import AccountForms from './account/account_forms';
import AccountPage from './account/account_show_container'
import ShoeShow from './product/shoes_show/shoe_show_container'
import Header from './homepage/header_container'
import HomePage from './homepage/homepage_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util'
import { Route, Switch, Redirect } from 'react-router-dom'
import ShoeIndex from './product/shoes_index/shoe_index_container';
import MenShoeIndex from './product/shoes_index/men_shoe_index_container';
import WomenShoeIndex from './product/shoes_index/women_shoe_index_container';
import Cart from './cart/cart_container'
import Footer from './homepage/footer';


class App extends React.Component {
    constructor(props) {
        super(props)
    }

    

    render() {
        return (
            <div>
                <Header />
                <Cart />
                <Switch>
                    <ProtectedRoute exact path='/account' component={AccountPage} />
                    <AuthRoute exact path='/account/login' component={AccountForms} />
                    <Route exact path='/shoes/womens' component={WomenShoeIndex} />
                    <Route exact path='/shoes/mens' component={MenShoeIndex} />
                    <Route exact path='/shoes/:shoeId' component={ShoeShow} />
                    <Route exact path='/shoes' component={ShoeIndex} />
                    <Route exact path='/' component={HomePage} />
                    <Redirect to='/' />
                </Switch>
                <Footer />
            </div>
        )
    }
}

export default App;