import React from 'react'
import { Link } from 'react-router-dom'
class accountPage extends React.Component {

    UNSAFE_componentWillMount() {
        if (Object.values(this.props.cart.products).length === 0) {
        } else {
            console.log('hi')
            Object.values(this.props.cart.products).forEach(prod => {
                let t = {
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
                this.props.updateProduct(t)
            })
            // this.props.fetchCart(this.props.currentUser.cart.id)
        }
    }

    componentDidMount() {
        if ( Object.values(this.props.cart.products).length === 0 ) {
            this.props.fetchCart(this.props.currentUser.cart.id)
        } else {
            // console.log('hi')
            // Object.values(this.props.cart.products).forEach( prod => {
            //     let t = {
            //         id: prod.id,
            //         product_name: prod.prouctName,
            //         colorway: prod.colorway,
            //         price: prod.price,
            //         cart_id: this.props.currentUser.cart.id,
            //         review_id: prod.review_id,
            //         gender: prod.gender,
            //         detail1: prod.detail1,
            //         detail2: prod.detail2,
            //         size: prod.size,
            //         display: prod.display,
            //         cart_photo_url: prod.cartPhotoUrl
            //     }
            //     this.props.updateProduct(t)
            // })
            // this.props.fetchCart(this.props.currentUser.cart.id)
        }
    }

    render () {
        return (
                <div className='account-page'>
                    <h3>My Account</h3>
                    <button onClick={() => this.props.logout(this.props.currentUser.id)}><Link to="/account/login">Logout</Link></button>
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