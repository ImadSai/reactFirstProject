import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (

        <nav className="navbar navbar-expand">

            <ul className="navbar-nav">

                <li className="nav-item">
                    <Link to="/home" className="nav-link">Home</Link>
                </li>

                <li className="nav-item">
                    <Link to="/counter" className="nav-link">Counter</Link>
                </li>

                <li className="nav-item">
                    <Link to="/about" className="nav-link">About</Link>
                </li>

            </ul>

        </nav>

    );
};

export default Header;