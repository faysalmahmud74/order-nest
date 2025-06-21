import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import LoginForm from './log-in.jsx';
import SignUpForm from './sign-up.jsx';
import HomePage from './App.jsx';
import OrderNav from './order/index.jsx';
import EmployeeNav from './employee/index.jsx';
import ReportsNav from './reports/index.jsx';
import SettingsNav from './settings/index.jsx';
import NewEmployee from './employee/new.jsx';
import EmployeeList from './employee/list.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DeliveryNav from './delivery/index.jsx';
import NotFound from './components/not-found.jsx';
import ProfileCard from './components/profileCard.jsx';
import PrivateRoute from './components/private-route.jsx';
import AuthProvider from './components/auth-context.jsx';
import ProductNav from './product/index.jsx';
import NewProduct from './product/new.jsx';
import ProductList from './product/list.jsx';
import EditProduct from './product/edit.jsx';
import NewInvoice from './invoice/new.jsx';
import InvoiceList from './invoice/list.jsx';
import InvoiceNav from './invoice/index.jsx';
import NewVariation from './product/variation/new.jsx';
import VariationListPage from './product/variation/index.jsx';
import EditVariation from './product/variation/edit.jsx';
import NewCategory from './product/category/new.jsx';
import CategoryList from './product/category/index.jsx';

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
            {/* Product Module Routes */}
            <Route path="/product" element={<PrivateRoute><ProductNav /></PrivateRoute>} />
            <Route path="/product/new" element={<PrivateRoute><NewProduct /></PrivateRoute>} />
            <Route path="/product/list" element={<PrivateRoute><ProductList /></PrivateRoute>} />
            <Route path="/product/edit/:id" element={<PrivateRoute><EditProduct /></PrivateRoute>} />
            <Route path="/product/variation/new" element={<PrivateRoute><NewVariation /></PrivateRoute>} />
            <Route path="/product/variation/edit/:id" element={<PrivateRoute><EditVariation /></PrivateRoute>} />
            <Route path="/product/variation" element={<PrivateRoute><VariationListPage /></PrivateRoute>} />
            <Route path="/product/category/new" element={<PrivateRoute><NewCategory /></PrivateRoute>} />
            <Route path="/product/category/edit/:id" element={<PrivateRoute><NewCategory /></PrivateRoute>} />
            <Route path="/product/category" element={<PrivateRoute><CategoryList /></PrivateRoute>} />

            {/* invoice Module Routes */}
            <Route path="/invoice" element={<PrivateRoute><InvoiceNav /></PrivateRoute>} />
            <Route path="/invoice/new" element={<PrivateRoute><NewInvoice /></PrivateRoute>} />
            <Route path="/invoice/list" element={<PrivateRoute><InvoiceList /></PrivateRoute>} />

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