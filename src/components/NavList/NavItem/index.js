import React from "react";
import { Link } from "react-router-dom";

export const NavItem = ({ src, children }) => (
    <li>
        <a href={`#${src}`}>
            <h5 style={{ color: 'white', }}>{children}</h5>
        </a>
    </li>

)