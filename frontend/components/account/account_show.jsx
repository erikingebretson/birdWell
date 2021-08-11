import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../homepage/header_container'
class accountPage extends React.Component {

    componentDidMount() {
        if ( Object.values(this.props.cart.products).length === 0 ) {
            this.props.fetchCart(this.props.currentUser.cart.id)
        } else {
            // update the cart's user id
            console.log(this.props.cart)
            let cart = {
                user_id: this.props.currentUser.id,
                products: Object.keys(this.props.cart.products),
                id: this.props.currentUser.cart.id
            }
            // this.props.products.forEach( prod => {
            //     let t = {
            //         prod.cart_id
            //     }
            //     this.props.updateProduct(t)
            // })
            // this.props.deleteCart(this.props.currentUser.cart.id)
        }
    }

    render () {
        return (
                <div className='account-page'>
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