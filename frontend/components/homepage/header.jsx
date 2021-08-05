import React from 'react';
import {Link} from 'react-router-dom'


class Header extends React.Component {
    constructor(props) {
        super(props)
    }

    sessionGreeting() {
            return (
                <div className='nav-greeting'>
                    <div className="product-nav">
                        <div><Link to='/shoes'>Men</Link></div>
                        <div><Link to='/shoes'>Women</Link></div>
                        <div><Link to='/shoes'>New Arrivals</Link></div>
                    </div>
                    <Link to='/'><h1 className="logo" >BirdWell</h1></Link>
                    <div className="account-nav" >
                        <Link to='/account'>Account</Link>
                        <Link to='/account/login'>Help</Link>
                        <Link to='/'>Cart</Link>
                    </div>
                </div>
            )
    }

    render() {
        return (
            <div className="root-header-div">
                {this.sessionGreeting()}
            </div>
        )
    }
}

export default Header;