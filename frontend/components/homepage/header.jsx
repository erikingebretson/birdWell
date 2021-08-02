import React from 'react';

class Header extends React.Component {
    constructor(props) {
        super(props)
    }

    sessionGreeting() {
        if (this.props.currentUser) {
            return (
                <h3>Hello {this.props.currentUser.username}</h3>
            )
        } else {
            return (
                <h3>Welcome</h3>
            )
        }
    }

    logOutButton() {
        return (
            <button onClick={() => this.props.logout()}>Log Out</button>
        )
    }

    render() {
        return (
            <div>
                <h1>BirdWell</h1>
                {this.sessionGreeting()}
                { this.props.currentUser ? this.logOutButton() : '' }
            </div>
        )
    }
}

export default Header;