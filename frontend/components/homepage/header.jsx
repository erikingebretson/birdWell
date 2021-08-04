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
                    <h3>Hello {this.props.currentUser.firstName}</h3>
                    <button onClick={ () => this.props.logout() }>Log Out</button>
                </div>
            )
        } else {
            return (
                <div>
                    <h3>Welcome</h3>
                    <br />
                    <Link to='/'>Home</Link>
                    <br />
                    <Link to='/account/login'>Log In</Link>
                    <br />
                    <Link to='/shoes'>Shoes</Link>
                    
                </div>
            )
        }
    }

    render() {
        return (
            <div className="root-header-div">
                <h1>BirdWell</h1>
                {this.sessionGreeting()}
            </div>
        )
    }
}

export default Header;