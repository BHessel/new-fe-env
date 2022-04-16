import React, { useState } from 'react';

const Registration = () => {

    //set state this way to dynamically handle the onChange event
    const [state, setState] = useState({
        email: "",
        password: "",
        password_confirmation: ""
    })

    const handleSubmit = (e) => {
        console.log('form submitted')
        e.preventDefault()
    }

    const handleChange = (e) => {
        console.log('handleChange', e)
        setState({
            [e.target.name]: e.target.value
        })
    }
    console.log('email:', state.email)
    console.log('password:', state.password)
    console.log('password_confirmation:', state.password_confirmation)
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input                       
                    type="email"
                    name="email"
                    placeholder='Email'
                    value={state.email}
                    onChange={handleChange}
                    required
                />

                <input                       
                    type="password"
                    name="password"
                    placeholder='Password'
                    value={state.password}
                    onChange={handleChange}
                    required
                />

                <input                       
                    type="password"
                    name="password_confirmation"
                    placeholder='Password Confirmation'
                    value={state.password_confirmation}
                    onChange={handleChange}
                    required
                />

                <button type="submit">
                    Register
                </button>

            </form>
        </div>
    );
}

export default Registration;
