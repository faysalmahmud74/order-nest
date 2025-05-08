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
import NewEmployee from './employe/new.jsx';
import EmployeeList from './employe/list.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DeliveryNav from './delivery/index.jsx';
import NotFound from './components/not-found.jsx';
import ProfileCard from './components/profileCard.jsx';
import PrivateRoute from './components/private-route.jsx';
import AuthProvider from './components/auth-context.jsx';

const Main = () => {
  return (
    <StrictMode>
      <AuthProvider>
        <Router>

          <ToastContainer  //react-toastify config default
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={true}
            closeOnClick
            pauseOnHover
            theme="colored"
          />

          <Routes>
            {/* Route for Login Page */}
            <Route path="/" element={<LoginForm />} />

            {/* Protected Routes */}
            <Route path="/dashboard" element={<PrivateRoute><App /></PrivateRoute>} />
            <Route path="/signUp" element={<SignUpForm />} />
            <Route path="/app" element={<PrivateRoute><HomePage /></PrivateRoute>} />
            <Route path="/order" element={<PrivateRoute><OrderNav /></PrivateRoute>} />
            <Route path="/employees" element={<PrivateRoute><EmployeeNav /></PrivateRoute>} />
            <Route path="/employees/new" element={<PrivateRoute><NewEmployee /></PrivateRoute>} />
            <Route path="/employees/list" element={<PrivateRoute><EmployeeList /></PrivateRoute>} />
            <Route path="/delivery" element={<PrivateRoute><DeliveryNav /></PrivateRoute>} />
            <Route path="/reports" element={<PrivateRoute><ReportsNav /></PrivateRoute>} />
            <Route path="/settings" element={<PrivateRoute><SettingsNav /></PrivateRoute>} />
            <Route path="/profile" element={<PrivateRoute><ProfileCard /></PrivateRoute>} />

            {/* Catch-all route for undefined paths */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </AuthProvider>
    </StrictMode>
  );
};

const root = createRoot(document.getElementById('root'));
root.render(<Main />);

export default Main;