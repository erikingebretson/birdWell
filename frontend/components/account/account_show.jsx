import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../homepage/header_container'
class accountPage extends React.Component {

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