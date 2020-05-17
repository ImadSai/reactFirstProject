import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation, useHistory } from 'react-router-dom'
import '../Styles/header.css';

function Header(props) {

    let actualPath = useLocation().pathname;
    let history = useHistory();

    const goToLogin = () => {
        history.push("/login");
    }

    const getUserStatus = () => {
        if(actualPath!== '/login') {
            return ( <button class="btn btn-secondary signin-btn" onClick={() => goToLogin()}> Sign in </button> );
        }
    }

    return (
        <nav className="navbar navbar-expand">
            <ul className="nav nav-tabs">

                <li className="nav-item">
                    <Link to="/home" className={actualPath === '/home' ? 'nav-link active' : 'nav-link'}> Home </Link>
                </li>

                <li className="nav-item">
                    <Link to="/ChronoMinuteur" className={actualPath === '/ChronoMinuteur' ? 'nav-link active' : 'nav-link'}> Chronometer and Timer </Link>
                </li>

                <li className="nav-item">
                    <Link to="/searchImages" className={actualPath === '/searchImages' ? 'nav-link active' : 'nav-link'}> Search Images </Link>
                </li>

                <li className="nav-item">
                    <Link to="/uploadFile" className={actualPath === '/uploadFile' ? 'nav-link active' : 'nav-link'}> Upload Files </Link>
                </li>

            </ul>

            {getUserStatus()}

        </nav>
    )

};

export default Header;