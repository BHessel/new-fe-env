import React, { useState } from 'react';
import '../App.css';
import {
  Routes,
  Route
} from 'react-router-dom'
import Home from './Home'
import Dashboard from './Dashboard'

function App() {

  const [user, setUser] = useState({});
  const [loggedInStatus, setLoggedInStatus] = useState('not logged in');

  const handleLogin = (data) => {
    setLoggedInStatus('logged in')
    setUser(data.user)
  }

  return (
    <div className="App">
      <Routes>
        
        <Route
          path={"/"}
          element={
            <Home
              loggedInStatus={loggedInStatus}
              handleLogin={handleLogin}
            />
          }
        />

        <Route
          path={"/dashboard"}
          element={
            <Dashboard
              loggedInStatus={loggedInStatus}
            />
          }
        />

      </Routes>
    </div>
  );
}

export default App;
