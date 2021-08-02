import React from 'react';

class sessionForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.user
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.formAction(this.state)
    }

    update(field) {
        return e => this.setState({ [field]: e.target.value })
    }

    emailField() {
        return (
        <div>
            <label >Email
                <input type="text" onChange={this.update('email')} value={this.state.email} />
            </label>
            <br />
        </div>
        )
    }
    
    render() {

        return (
            <div>
                <h3>{this.props.formEvent}</h3>
                <form onSubmit={e => this.handleSubmit(e)}>
                    <label >Username
                        <input type="text" onChange={this.update('username')} value={this.state.username} />
                    </label>
                    <br />
                    {this.props.formEvent === 'Register' ? this.emailField() : '' }
                    <label >Password
                        <input type="password" onChange={this.update('password')} value={this.state.password} />
                    </label>
                    <button type="submit">{this.props.formEvent}</button>
                </form>
            </div>
        )
    }
}

export default sessionForm;