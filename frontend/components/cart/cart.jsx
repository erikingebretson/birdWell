import React from 'react';
import { Link } from 'react-router-dom';

class Cart extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchCart(this.props.currentUser.cart.id)
    }

    turnCartOff() {
        let cart = document.querySelector(".cart-root")
        cart.classList.remove("cart-on")
    }

    readCartedProduct() {
        let arr = Object.values(this.props.products)
        console.log(arr)
        return arr.map( (product, i) => (
            <div key={i} className="tile" >
                <div  className="cart-item" >
                    <img src={product.photoUrl} alt="" />
                </div>
                <div>
                    <p>{product.productName}</p>
                    <p>{product.colorway}</p>
                    <p>{product.size}</p>
                </div>
                <div>
                    <button onClick={ () => this.props.deleteProduct(product.id)}>X</button>
                    <p>${product.price}</p>
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
                            <a onClick={() => this.turnCartOff()} ><img className="arrow-img" src="right-arrow.png" alt="" /></a>
                            <img className="cart-img" src="shopping-cart.png" alt="" />
                            <p className="count" >{this.props.cart.products.length}</p>
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
                        <div>

                        </div>
                        <div>
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Cart;