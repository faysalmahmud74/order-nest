// Footer.js
import React from 'react';

const Footer = () => {
    return (
        <div className='relative py-5'>
            <footer className="bg-[#F3F4F6] text-center text-gray-700 border-t border-b p-4 mt-auto fixed bottom-0 w-full">
                <p className="text-sm">
                    &copy; {new Date().getFullYear()} Order Nest. All rights reserved.
                </p>
                <p className="text-xs">Ui Version: 1.0.3 | Developed by Faysal Mahmud</p>
            </footer>
        </div>
    );
};

export default Footer;
