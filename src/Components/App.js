import '../App.css';
import {
  Routes,
  Route
} from 'react-router-dom'
import Home from './Home'
import Dashboard from './Dashboard'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/dashboard"} element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
