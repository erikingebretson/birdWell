import React from 'react';
import { Link } from 'react-router-dom';

class Cart extends React.Component {
    constructor(props) {
        super(props)
    }

    turnCartOff() {
        let cart = document.querySelector(".cart-root")
        cart.classList.remove("cart-on")
    }

    render() {
        return (
            <div className="cart-root" >
                <h1 ><a onClick={() => this.turnCartOff()} >CART!</a></h1>
            </div>
        )
    }
}

export default Cart;