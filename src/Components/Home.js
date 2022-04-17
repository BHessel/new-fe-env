import React from 'react';
import Registration from './auth/Registration';
import { useNavigate } from 'react-router-dom'

const Home = ({ loggedInStatus, handleLogin }) => {

    let navigate = useNavigate()

    const handleSuccessfulAuth = (data) => {
        // console.log(data)
        handleLogin(data)
        navigate('/dashboard')
    }

    return (
        <div>
            <h1>Home</h1>
            <h2>Status: {loggedInStatus}</h2>
            <Registration 
                handleSuccessfulAuth={handleSuccessfulAuth}    
            />
        </div>
    );
}

export default Home;
