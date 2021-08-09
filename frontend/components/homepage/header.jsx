import React from 'react';
import {Link} from 'react-router-dom'


class Header extends React.Component {
    constructor(props) {
        super(props)
    }

    turnCartOn() {
        let cart = document.querySelector(".cart-root")
        cart.classList.add("cart-on")
    }

    sessionGreeting() {
            return (
                <div className='nav-greeting'>
                    <div className="product-nav">
                        <div><Link to='/shoes/mens'>Men</Link></div>
                        <div><Link to='/shoes/womens'>Women</Link></div>
                        <div><Link to='/shoes'>New Arrivals</Link></div>
                    </div>
                    <Link to='/'><h1 className="logo" >BirdWell</h1></Link>
                    <div className="account-nav" >
                        <Link to='/account'>Account</Link>
                        <a onClick={() => this.turnCartOn()} >Cart</a>
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