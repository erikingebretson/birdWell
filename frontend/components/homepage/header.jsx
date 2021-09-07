import React from 'react';
import {Link} from 'react-router-dom'


class Header extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        if (this.props.currentUser !== undefined ) {
            this.props.fetchCart(this.props.currentUser.cart.id)
        }
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
                    <div className="logo-box">
                        <h1><Link className="logo" to='/'>birdwell</Link></h1>
                    </div>
                    <div className="account-nav" >
                        <Link to='/account'><img className="header-account-img" src="images/user.png" alt="Account" /></Link>
                        <a onClick={() => this.turnCartOn()} >
                            <div className='header-icons'>
                                <img className="header-cart-img" src="images/shopping-cart.png" alt="Cart" />
                                <p className="header-count" >{Object.values(this.props.cart.products).length}</p>
                            </div>
                        </a>
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