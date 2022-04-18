import React, { useState, useEffect } from 'react';
import '../App.css';
import {
  Routes,
  Route
} from 'react-router-dom'
import Home from './Home'
import Dashboard from './Dashboard'
import axios from 'axios';

function App() {

  const [user, setUser] = useState({})
  const [loggedInStatus, setLoggedInStatus] = useState('not_logged_in')

  const handleLogin = (data) => {
    setLoggedInStatus('logged_in')
    setUser(data.user)
  }

  const handleLogout = () => {
    setLoggedInStatus('not_logged_in')
    setUser({})
  }

  
  useEffect(() => {
    const checkLoginStatus = () => {
      axios.get('http://localhost:3000/logged_in',
        { withCredentials: true })
        .then(response => {
          console.log('logged in?:', response)
          if (response.data.logged_in && loggedInStatus === 'not_logged_in') {
            setLoggedInStatus('logged_in')
            setUser(response.data.user)
        } else if (!response.data.logged_in && loggedInStatus === 'logged_in') {
          setLoggedInStatus('not_logged_in')
          setUser({})
        }
      })
        .catch(error => {
          console.log('check login error?', error)
        })
    }
    return () => {
      checkLoginStatus()
    }
  }, [])

  // useEffect(() => {
  //   effect
  //   return () => {
  //     cleanup
  //   };
  // }, [input]);


  return (
    <div className="App">
      <Routes>
        
        <Route
          path={"/"}
          element={
            <Home
              loggedInStatus={loggedInStatus}
              handleLogin={handleLogin}
              handleLogout={handleLogout}
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
