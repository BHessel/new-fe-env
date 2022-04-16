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


  return (
    <div className="App">
      <Routes>
        
        <Route
          path={"/"}
          element={
            <Home
              loggedInStatus={loggedInStatus}
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
