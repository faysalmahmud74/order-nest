// Footer.js
import React from 'react';

const Footer = () => {
    return (
        <div className='relative'>
            <footer className="text-center text-gray-700 border-t border-b p-4 mt-auto fixed bottom-0 w-full">
            <p className="text-sm">
                &copy; {new Date().getFullYear()} ERP Solution. All rights reserved.
            </p>
            <p className="text-xs">Web Version: 1.0.0 | Developed by Faysal Mahmud</p>
        </footer>
        </div>
    );
};

export default Footer;
