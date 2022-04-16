import React, { useState } from 'react';
import axios from 'axios';

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
        // console.log('handleChange', e)
        setState({
            [e.target.name]: e.target.value
        })
    }
    
    
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
