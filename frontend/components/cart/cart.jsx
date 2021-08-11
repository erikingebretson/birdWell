import React from 'react';
import { Link } from 'react-router-dom';

class Cart extends React.Component {
    constructor(props) {
        super(props)
        this.total = 0;
    }

    turnCartOff() {
        let cart = document.querySelector(".cart-root")
        cart.classList.remove("cart-on")
    }

    checkoutMessage() {
        let msg = document.querySelector(".hidden-message")
        msg.classList.add("checkout-button-message")
    }

    readCartedProduct() {
        let arr = Object.values(this.props.products)
        this.total = 0;
        return arr.map( (product, i) => (
            <div key={i} className="tile" >
                <div  className="cart-item" >
                    <img src={product.cartPhotoUrl} alt="" />
                </div>
                <div className="cart-prod-details" >
                    <div>
                        <p>{product.gender[0].toUpperCase() + product.gender.slice(1)}'s {product.productName}</p>
                        <p>{product.colorway}</p>
                        <p>Size: {product.size}</p>
                    </div>
                </div>
                <div className="cart-prod-buttons" >
                    <button onClick={ () => this.props.deleteProduct(product.id)}>X</button>
                    <p>${product.price}</p>
                    <p className="hidden-total" >{this.total += product.price}</p>
                </div>
            </div>
        ))
    }

    render() {
        if (this.props.products === undefined ) return null;

        return (
            <div className="cart-root" >
                <div className="cart-container">
                    <div className="cart-title" >
                        <div className='header-icons'>
                            <a onClick={() => this.turnCartOff()} ><img className="arrow-img" src="images/right-arrow.png" alt="" /></a>
                            <img className="cart-img" src="shopping-cart.png" alt="" />
                            <p className="count" >{Object.values(this.props.cart.products).length}</p>
                        </div>
                        <div className='header-text' >
                            <p>Thanks for making it this far!</p>
                            <p>Thanks for making it this far! BirdWell is an app clone and does not sell product. Feel free to keep browsing and enjoying the site functionality!</p>
                        </div>
                        <div className="divider"></div>
                    </div>
                    <div className="item-tiles" >
                        <div>
                            {this.props.cart.products !== undefined ? this.readCartedProduct() : <p></p>}
                        </div>
                    </div>
                    <div className="cart-footer" >
                        <div className="subtotal" >
                            <p>Subtotal</p>
                            <p>${this.total} USD</p>
                        </div>
                        <div className="checkout-button" >
                            <button onClick={() => this.checkoutMessage() } >Thanks for Browsing!</button>
                            <p className="hidden-message" >Nothing for sale here!</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Cart;