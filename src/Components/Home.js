import React from 'react';
import Registration from './auth/Registration';

const Home = ({ loggedInStatus }) => {
    return (
        <div>
            <h1>Home</h1>
            <h2>Status: {loggedInStatus}</h2>
            <Registration />
        </div>
    );
}

export default Home;
