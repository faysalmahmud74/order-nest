import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUsers, FaClipboardList, FaChartBar, FaCog } from 'react-icons/fa';
import Header from './header';
import Footer from './footer';

const HomePage = () => {
  return (
    <div className='relative'>
      <Header />
      <div className="flex">
        {/* Sidebar */}
        <nav className="bg-gray-800 w-64 h-screen p-5">
          <h1 className="text-white text-2xl font-bold mb-6">ERP Solution</h1>
          <ul className="space-y-4 mt-10">
            <li>
              <Link to="/" className="text-gray-300 flex items-center hover:text-white">
                <FaHome className="mr-3" />
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/employees" className="text-gray-300 flex items-center hover:text-white">
                <FaUsers className="mr-3" />
                Employees
              </Link>
            </li>
            <li>
              <Link to="/projects" className="text-gray-300 flex items-center hover:text-white">
                <FaClipboardList className="mr-3" />
                Projects
              </Link>
            </li>
            <li>
              <Link to="/reports" className="text-gray-300 flex items-center hover:text-white">
                <FaChartBar className="mr-3" />
                Reports
              </Link>
            </li>
            <li>
              <Link to="/settings" className="text-gray-300 flex items-center hover:text-white">
                <FaCog className="mr-3" />
                Settings
              </Link>
            </li>
          </ul>
        </nav>

        {/* Main Content Area */}
        <div className="flex-1 bg-gray-100">
          <div className='p-10 mt-12'>
            <h2 className="text-3xl font-bold mb-4">Welcome to the ERP Solution</h2>
            <p className="text-gray-700 mb-6">
              This is a demo ERP solution that helps you manage your resources effectively. Use the side navigation to explore different sections of the application.
            </p>

            {/* Sample Cards or Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-white p-5 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold">Quick Overview</h3>
                <p>Get insights into your business performance.</p>
              </div>
              <div className="bg-white p-5 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold">Employee Management</h3>
                <p>Manage your employees efficiently.</p>
              </div>
              <div className="bg-white p-5 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold">Project Tracking</h3>
                <p>Keep track of all your ongoing projects.</p>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>


    </div>
  );
};

export default HomePage;