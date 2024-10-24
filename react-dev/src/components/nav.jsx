import { useState } from "react";
import { FaHome, FaUsers, FaClipboardList, FaChartBar, FaCog, FaBars, FaShippingFast } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>

            {/* Sidebar */}
            <div className="relative">
                <nav
                    className={`bg-white w-64 h-screen p-5 fixed top-0 left-0 z-40 transform ${isOpen ? "translate-x-0" : "-translate-x-full"
                        } transition-transform duration-300 lg:translate-x-0`}
                >
                    <ul className="space-y-4 mt-20">
                        <li>
                            <NavLink
                                to="/dashboard"
                                className={({ isActive }) =>
                                    isActive
                                        ? "flex items-center hover:text-teal-600 bg-blue-500 text-white py-2 rounded-lg px-2"
                                        : "text-gray-600 flex items-center hover:text-teal-600 px-2"
                                }
                            >
                                <FaHome className="mr-3" />
                                Dashboard
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/employees"
                                className={({ isActive }) =>
                                    isActive
                                        ? "flex items-center hover:text-teal-600 bg-blue-500 text-white py-2 rounded-lg px-2"
                                        : "text-gray-600 flex items-center hover:text-teal-600 px-2"
                                }
                            >
                                <FaUsers className="mr-3" />
                                Employees
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/order"
                                className={({ isActive }) =>
                                    isActive
                                        ? "flex items-center hover:text-teal-600 bg-blue-500 text-white py-2 rounded-lg px-2"
                                        : "text-gray-600 flex items-center hover:text-teal-600 px-2"
                                }
                            >
                                <FaClipboardList className="mr-3" />
                                Order
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/delivery"
                                className={({ isActive }) =>
                                    isActive
                                        ? "flex items-center hover:text-teal-600 bg-blue-500 text-white py-2 rounded-lg px-2"
                                        : "text-gray-600 flex items-center hover:text-teal-600 px-2"
                                }
                            >
                                <FaShippingFast className="mr-3" />
                                Delivery
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/reports"
                                className={({ isActive }) =>
                                    isActive
                                        ? "flex items-center hover:text-teal-600 bg-blue-500 text-white py-2 rounded-lg px-2"
                                        : "text-gray-600 flex items-center hover:text-teal-600 px-2"
                                }
                            >
                                <FaChartBar className="mr-3" />
                                Reports
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/settings"
                                className={({ isActive }) =>
                                    isActive
                                        ? "flex items-center hover:text-teal-600 bg-blue-500 text-white py-2 rounded-lg px-2"
                                        : "text-gray-600 flex items-center hover:text-teal-600 px-2"
                                }
                            >
                                <FaCog className="mr-3" />
                                Settings
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>

            {/* Overlay for mobile when sidebar is open */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black opacity-50 z-30 lg:hidden"
                    onClick={toggleSidebar}
                ></div>
            )}
        </>
    );
};

export default Sidebar;