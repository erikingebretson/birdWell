import React from 'react'
import LogIn from './login_form_container'
import SignUp from './signup_form_container'

const accountForms = () => {
    return (
        <div className="account-login-page">
            <LogIn />
            <SignUp />
        </div>
    )
}

export default accountForms;