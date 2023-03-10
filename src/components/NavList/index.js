import React from "react";
import { NavItem } from "./NavItem";

export const NavList = ({ navItems, ...props }) => (
    <ul style={{ display: 'flex', flexDirection: 'column', gap: 16, listStyleType: 'none', margin: 0, padding: 0 }} {...props}>
        {navItems.map(item => <NavItem key={item} src={item}>{item.toUpperCase()}</NavItem>)}
    </ul>

)