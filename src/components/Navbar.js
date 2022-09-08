import React from 'react';
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar">
            <ul className="links-list">
                <li>
                    <Link className="navbar--link" to="/">Home</Link>
                </li>
                <li>
                    <Link className="navbar--link" to="/form">Form</Link>
                </li>
                <li>
                    <Link className="navbar--link" to="/users">Users</Link>
                </li>
                <li>
                    <Link className="navbar--link" to="/cards">Cards</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar