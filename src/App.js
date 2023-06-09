import React from 'react';
import { useContext } from 'react';
import { AuthContext } from './AuthContext';
import { AuthProvider } from './AuthContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Dashboard from './Dashboard';
import Login from './login';
import Logout from './Logout';
import Signup from './signup';
import Profile from './profile';
import { Navbar, Nav } from 'react-bootstrap';
import OtpVerification from './OtpVerification';

const NavbarComponent = () => {
  const { isLoggedIn } = useContext(AuthContext);
  
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand as={Link} to="/">My App</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/login">Login</Nav.Link>
          <Nav.Link as={Link} to="/signup">Sign Up</Nav.Link>
          {isLoggedIn && <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>}
          {isLoggedIn && <Nav.Link as={Link} to="/profile">Profile</Nav.Link>}
          {isLoggedIn && <Nav.Link as={Link} to="/logout">Logout</Nav.Link>}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div>
          <NavbarComponent />
          <div className="container mt-3">
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/logout" element={<Logout />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/verify" element={<OtpVerification />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/" element={<Dashboard />} />
            </Routes>
          </div>
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;