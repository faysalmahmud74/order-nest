import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import LoginForm from './log-in.jsx';
import SignUpForm from './sign-up.jsx';
import HomePage from './App.jsx';

const root = createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <Router>
      <Routes>
        {/* Route for Login Page */}
        <Route path="/" element={<LoginForm />} />

        {/* Route for Main Application after Login */}
        <Route path="/app" element={<App />} />
        <Route path="/signUp" element={<SignUpForm />} />
        <Route path="/app" element={<HomePage />} />

        {/* Add additional routes as needed */}
        {/* <Route path="/another-page" element={<AnotherPage />} /> */}
      </Routes>
    </Router>
  </StrictMode>
);