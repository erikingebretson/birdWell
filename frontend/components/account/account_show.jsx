import React from 'react'
import { Link } from 'react-router-dom'

class accountPage extends React.Component {

    render () {
        return (
            <div className='account-page'>
                <h3>My Account</h3>
                <button onClick={() => this.props.logout(this.props.currentUser.id)}><Link to="/">Logout</Link></button>
                <div className=''>
                    <div>
                        <p>You haven't placed any orders yet</p>
                    </div>
                    <div className='user-details'>
                        <p>{this.props.currentUser.firstName} {this.props.currentUser.lastName}</p>
                        <p>{this.props.currentUser.email}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default accountPage;