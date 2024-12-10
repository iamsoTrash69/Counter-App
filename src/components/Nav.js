import React from 'react';
import './Common.css';

function Nav() {
    return (
        <nav className="navbar">
            <div className="navbar-logo">Trash</div>
            <ul className="navbar-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
}

export default Nav;