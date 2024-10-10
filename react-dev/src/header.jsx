// Header.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
    const router = useNavigate()

    const handleLogout = () => {
        router('/')
        console.alert("Log out success");
    };

    return (
        <div className='relative'>
            <header className="fixed top-0 w-full bg-[#001D4C] text-white flex justify-between items-center p-4 border-b border-white">
            <img
                src='/public/PngItem_12080.png'  // Replace with your logo URL or import
                alt="pocketX"
                className="h-auto w-24"
            />
            
            <button
                onClick={handleLogout}
                className="bg-red-600 hover:bg-red-500 text-white font-bold py-2 px-4 rounded"
            >
                Log Out
            </button>
        </header>
        </div>
    );
};

export default Header;