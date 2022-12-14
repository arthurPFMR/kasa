import React from 'react';
import "../styles/index.scss"
import Logo from './Logo';
import Navigation from './Navigation';

const Header = () => {
    return (
        <div className='header'>
            <Logo />
            <Navigation />
        </div>
    );
};

export default Header;