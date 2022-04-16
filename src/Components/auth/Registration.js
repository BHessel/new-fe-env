import React, { useState } from 'react';
import axios from 'axios';

const Registration = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [password_confirmation, setPassword_Confirmation] = useState('')

    const handleSubmit = (e) => {
        // console.log('form submitted')

        axios.post("http://localhost:3000/registrations", {
            user: {
                email: email,
                password: password,
                password_confirmation: password_confirmation
            }},
            { withCredentails: true }
        )
        .then(response => {console.log("registration resp" , response)})
        .catch(error => {console.log("registration error", error)}) 
        e.preventDefault()
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handlePasswordConfirmation = (e) => {
        setPassword_Confirmation(e.target.value)
    }
    
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input                       
                    type="email"
                    name="email"
                    placeholder='Email'
                    value={email}
                    onChange={handleEmail}
                    required
                />

                <input                       
                    type="password"
                    name="password"
                    placeholder='Password'
                    value={password}
                    onChange={handlePassword}
                    required
                />

                <input                       
                    type="password"
                    name="password_confirmation"
                    placeholder='Password Confirmation'
                    value={password_confirmation}
                    onChange={handlePasswordConfirmation}
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
