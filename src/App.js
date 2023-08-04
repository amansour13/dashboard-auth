import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Login from './login';
import Dashboard from './Dashboard';


function App() {

  return (
    <>
      <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<Login />} />
        </Routes>
      </Router>
    </>
    </>
  );
}

export default App;
