import React from "react";
import { Link, useLocation } from "react-router-dom";

function Logo() {
    const location = useLocation();
    return (
        <div>
            <Link to="/" className="navbar-brand d-lg-inline-block d-none bg-info p-2 mb-0 rounded text-light h1">
                Andrew Bautista
                </Link>
            <Link to="/" className="navbar-brand d-inline-block d-lg-none bg-info p-2 mb-0 rounded text-light h1">
                AB
                </Link>
        </div>
    )
}


export default Logo;