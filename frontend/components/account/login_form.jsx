import React from 'react';

class loginForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.user
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.formAction(this.state)

    }

    update(field) {
        return e => this.setState({ [field]: e.target.value })
    }

    readErrors() {
        console.log(this.props)
        return this.props.errors.map((error, i) => (
            <div>
                <p key={i}>{error}</p>
                <br />
            </div>
        ))
    }

    render() {
        console.log(this.props)
        return (
            <div className={this.props.class}>
                <h3>{this.props.formHeader}</h3>

                {this.props.errors.length > 0 && this.props.formEvent === 'Sign In' ? this.readErrors() : ''}

                <form className="account-form" onSubmit={e => this.handleSubmit(e)}>
                    {this.props.formEvent === 'Register' ? this.nameFields() : ''}
                    <label htmlFor={`${this.props.class}email`}>Email</label>
                    <input id={`${this.props.class}email`} type="text" onChange={this.update('email')} value={this.state.email} />
                    <br />
                    <label htmlFor={`${this.props.class}password`}>Password</label>
                    <input id={`${this.props.class}password`} type="password" onChange={this.update('password')} value={this.state.password} />
                    <button type="submit">{this.props.formEvent}</button>
                </form>
            </div>
        )
    }
}

export default loginForm;