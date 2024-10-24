import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import LoginForm from './log-in.jsx';
import SignUpForm from './sign-up.jsx';
import HomePage from './App.jsx';
import OrderNav from './order/index.jsx';
import EmployeeNav from './employe/index.jsx';
import ReportsNav from './reports/index.jsx';
import SettingsNav from './settings/index.jsx';

const root = createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <Router>
      <Routes>
        {/* Route for Login Page */}
        <Route path="/" element={<LoginForm />} />

        {/* Route for Main Application after Login */}
        <Route path="/dashboard" element={<App />} />
        <Route path="/signUp" element={<SignUpForm />} />
        <Route path="/app" element={<HomePage />} />
        <Route path="/order" element={<OrderNav />} />
        <Route path="/employees" element={<EmployeeNav />} />
        <Route path="/delivery" element={<EmployeeNav />} />
        <Route path="/reports" element={<ReportsNav />} />
        <Route path="/settings" element={<SettingsNav />} />

        {/* Add additional routes as needed */}
        {/* <Route path="/another-page" element={<AnotherPage />} /> */}
      </Routes>
    </Router>
  </StrictMode>
);