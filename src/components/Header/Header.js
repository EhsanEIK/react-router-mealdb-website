import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='bg-slate-600 text-white flex justify-center p-5'>
            <div>
                <NavLink to='/home' className='mr-5 hover:text-red-600'>Home</NavLink>
                <NavLink to='/about' className='mr-5 hover:text-red-600'>About</NavLink>
                <NavLink to='/restaurant' className='mr-5 hover:text-red-600'>Restaurant</NavLink>
            </div>
        </nav >
    );
};

export default Header;