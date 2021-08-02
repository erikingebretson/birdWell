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

    nameFields() {
        return (
        <div>
            <label >First Name</label>
                <input type="text" onChange={this.update('first_name')} value={this.state.first_name} />
            <br />
            <label >Last Name</label>
                <input type="text" onChange={this.update('last_name')} value={this.state.last_name} />
            <br />
        </div>
        )
    }
    
    createAccountInfo() {
        return (
            <div>
                <p>We never save credit card information.</p>
                <p>Registering makes checkout fast and easy and saves your order information in your account.</p>
            </div>
        )
    }

    readErrors() {
        return this.props.errors.map( (error, i) => (
            <div>
                <p key={i}>{error}</p>
                <br />
            </div>
        ))
    }

    render() {

        return (
            <div className={this.props.class}>
                <h3>{this.props.formHeader}</h3>

                {this.props.formEvent === 'Register' ? this.createAccountInfo() : ''}
                {this.props.errors.length > 0 ? this.readErrors() : ''}

                <form className="account-form" onSubmit={e => this.handleSubmit(e)}>
                    {this.props.formEvent === 'Register' ? this.nameFields() : '' }
                    <label >Email</label>
                        <input type="text" onChange={this.update('email')} value={this.state.email} />
                    <br />
                    <label >Password</label>
                        <input type="password" onChange={this.update('password')} value={this.state.password} />
                    <button type="submit">{this.props.formEvent}</button>
                </form>
            </div>
        )
    }
}

export default sessionForm;