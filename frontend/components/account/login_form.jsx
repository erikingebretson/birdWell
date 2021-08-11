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
        return this.props.errors.map((error, i) => (
            <div className="errors">
                <p key={i}>{error}</p>
            </div>
        ))
    }

    demoUser(e) {
        e.preventDefault(e);
        // console.log(this.state)
        // this.props.formAction({ user: { email: 'test123', password: 'test123' } })
        this.props.formAction({ first_name: "Demo", last_name: "User", email: "DemoUser@demo.com", password: "test123" })
    }

    render() {

        return (
            <div className={this.props.class}>
                <h3>{this.props.formHeader}</h3>
                {this.props.errors[0] === "Incorrect email or password." ? this.readErrors() : ''}

                <form className="account-form" onSubmit={e => this.handleSubmit(e)}>
                    {this.props.formEvent === 'Register' ? this.nameFields() : ''}
                    <label htmlFor={`${this.props.class}email`}>Email</label>
                    <input id={`${this.props.class}email`} type="text" onChange={this.update('email')} value={this.state.email} />
                    <br />
                    <label htmlFor={`${this.props.class}password`}>Password</label>
                    <input id={`${this.props.class}password`} type="password" onChange={this.update('password')} value={this.state.password} />
                    <button type="submit">{this.props.formEvent}</button>
                    <br />
                    <br />
                    <button onClick={(e) => this.demoUser(e)}>DEMO LOGIN</button>
                </form>
            </div>
        )
    }
}

export default loginForm;