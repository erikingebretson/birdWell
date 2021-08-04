import React from 'react';
import {Link} from 'react-router-dom'

class Header extends React.Component {
    constructor(props) {
        super(props)
    }

    sessionGreeting() {
        if (this.props.currentUser) {
            return (
                <div className='nav-greeting' >
                    <h1>BirdWell</h1>
                    <h3>Hello {this.props.currentUser.firstName}</h3>
                    <button onClick={ () => this.props.logout() }>Log Out</button>
                </div>
            )
        } else {
            return (
                <div className='nav-greeting'>
                    <h1>BirdWell</h1>
                    <h3>Welcome</h3>
                    <Link to='/'>Home</Link>
                    <Link to='/shoes'>Shoes</Link>
                    <Link to='/account/login'>Log In</Link>
                    
                </div>
            )
        }
    }

    render() {
        return (
            <div className="root-header-div">
                {this.sessionGreeting()}
            </div>
        )
    }
}

export default Header;