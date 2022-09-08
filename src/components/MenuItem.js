import React from 'react'
import { Link } from "react-router-dom";

function MenuItem({ routeImg, imgDescription, routeName, routeLink}) {
    return (
        <li className="menu-item">
            <Link className="menu-link" to={routeLink}>
                <img className="menu-img" src={routeImg} alt={imgDescription} />
                <span className="link-text">{routeName}</span>
            </Link>
        </li>
    )
}

export default MenuItem