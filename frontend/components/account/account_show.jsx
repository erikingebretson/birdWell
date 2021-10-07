import React from 'react'
import { Link } from 'react-router-dom'
class accountPage extends React.Component {

    UNSAFE_componentWillMount() {
        if (Object.values(this.props.cart.products).length === 0 || this.props.cart.foreignCart) {
        } else {
            Object.values(this.props.cart.products).forEach(prod => {
                console.log(this.props.cart)
                let cartedProd = {
                    id: prod.id,
                    product_name: prod.prouctName,
                    colorway: prod.colorway,
                    price: prod.price,
                    cart_id: this.props.currentUser.cart.id,
                    review_id: prod.review_id,
                    gender: prod.gender,
                    detail1: prod.detail1,
                    detail2: prod.detail2,
                    size: prod.size,
                    display: prod.display,
                    cart_photo_url: prod.cartPhotoUrl
                }
                this.props.updateProduct(cartedProd)
            })
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0)
        this.props.fetchCart(this.props.currentUser.cart.id)
    }

    turnCartOff() {
        let cart = document.querySelector(".cart-root")
        cart.classList.remove("cart-on")
    }

    render () {
        return (
            <div className='account-page' onClick={() => this.turnCartOff()}>
                <h3>My Account</h3>
                <button onClick={() => this.props.logout(this.props.currentUser.id)}><Link to="/">Logout</Link></button>
                <div className='account-details'>
                    <ul>
                        <li>You haven't placed any orders yet.</li>
                    </ul>
                    <ul className='user-details'>
                        <li>{this.props.currentUser.firstName} {this.props.currentUser.lastName}</li>
                        <li>{this.props.currentUser.email}</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default accountPage;