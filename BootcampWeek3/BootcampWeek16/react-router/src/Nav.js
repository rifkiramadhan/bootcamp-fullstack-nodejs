import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    // const navStyle = {
    //     color: 'white'
    // };

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/#">Fortnite Catalogue</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">
                                    <li>Home</li>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/shop">
                                    <li>Shop</li>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">
                                    <li>About</li>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>

        
    );
};

export default Nav;
