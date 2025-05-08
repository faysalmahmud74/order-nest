import React, { useState, useEffect, useRef, useContext } from 'react';
import { FaSignOutAlt, FaUserCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { DEFAULT_USER_IMAGE_URL } from './constants';
import Breadcrumbs from './breadcrumbs';
import { AuthContext } from './auth-context';

const Header = () => {
    const router = useNavigate();
    const { setIsAuthenticated } = useContext(AuthContext);
    const [isMenu, setIsMenu] = useState(false);
    const menuRef = useRef(null);

    const handleLogout = () => {
        setIsAuthenticated(false); // Update authentication status
        localStorage.removeItem('isAuthenticated'); // Clear authentication state from localStorage
        toast.error("You have successfully logged out. See you next time!");
        router('/');
    };

    const _toProfile = () => {
        router('/profile');
    };

    const toggleMenu = () => {
        setIsMenu(prev => !prev); // Toggle the menu
    };

    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setIsMenu(false); // Close the menu
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="relative">
            <header className="fixed top-0 w-full bg-white flex items-center justify-between px-4 py-3 border-b border-gray-200 z-50">
                {/* Logo in the middle */}
                <div className="flex-grow flex justify-center lg:justify-start">
                    <div className='lg:w-[255px] xl:w-[255px] 2xl:w-[255px]'>
                        <img
                            src="/pngkey.com-domino-png-2349823.png"
                            alt="Logo"
                            className="h-auto w-24 cursor-pointer"
                            onClick={() => router('/dashboard')}
                        />
                    </div>
                    <div className="hidden lg:flex lg:flex-grow">
                        <Breadcrumbs />
                    </div>
                </div>

                {/* Profile Avatar */}
                <img
                    src={DEFAULT_USER_IMAGE_URL}
                    alt="Avatar"
                    className="h-11 w-11 border rounded-full cursor-pointer"
                    onClick={toggleMenu}
                />

                {/* Dropdown Menu */}
                {isMenu && (
                    <div
                        ref={menuRef}
                        className="absolute right-4 top-14 w-48 bg-white shadow-md rounded-md z-50"
                    >
                        <div
                            className="flex items-center px-4 py-2 text-sm cursor-pointer hover:bg-gray-100"
                            onClick={_toProfile}
                        >
                            <FaUserCircle className="mr-2" />
                            Profile
                        </div>
                        <div
                            className="flex items-center px-4 py-2 text-sm cursor-pointer hover:bg-gray-100"
                            onClick={handleLogout}
                        >
                            <FaSignOutAlt className="mr-2" />
                            Log Out
                        </div>
                    </div>
                )}
            </header>
        </div>
    );
};

export default Header;