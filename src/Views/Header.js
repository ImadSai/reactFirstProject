import React from 'react';
import { useLocation, useHistory, Link } from 'react-router-dom';
import '../Styles/header.css';

function Header(props) {

    let actualPath = useLocation().pathname;
    let history = useHistory();

    const goToLogin = () => {
        history.push("/login");
    }

    const logout = () => {
        localStorage.clear();
        history.push("/login");
    }

    const getInfoUser = () => {
        let user = JSON.parse(localStorage.getItem('user'));
        console.log(user);
        return (
            <div>
                <span className={user.status === 'valide' ? 'dot-active' : 'dot-disabled'}></span>
                <span className="font-weight-bold ml-3" > {user.name} </span>
            </div>
        );
    }

    const getUserStatus = () => {
        if (localStorage.getItem('token') === null) {
            if (actualPath !== '/login')
                return (<button className="btn btn-secondary" onClick={() => goToLogin()}> Sign in </button>);
        } else {
            return (
                <div className="form-inline d-flex justify-content-center">
                    <span> {getInfoUser()} </span>
                    <div className="vl" />
                    <button className="btn btn-danger" onClick={() => logout()}> Log out </button>
                </div>
            );
        }
    }

    return (

        <nav className="navbar navbar-expand justify-content-between">
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