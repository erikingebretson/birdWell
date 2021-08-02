import React from 'react';
import {Link} from 'react-router-dom'

class Header extends React.Component {
    constructor(props) {
        super(props)
    }

    sessionGreeting() {
        if (this.props.currentUser) {
            return (
                <div>
                    <h3>Hello {this.props.currentUser.username}</h3>
                    <button onClick={ () => this.props.logout() }>Log Out</button>
                </div>
            )
        } else {
            return (
                <div>
                    <h3>Welcome</h3>
                    <Link to='/account/login'>Log In</Link>
                </div>
            )
        }
    }

    render() {
        return (
            <div>
                <h1>BirdWell</h1>
                {this.sessionGreeting()}
            </div>
        )
    }
}

export default Header;