import React from "react";
import { NavItem } from "./NavItem";

export const NavList = ({ navItems }) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {navItems.map(item => <NavItem>{item}</NavItem>)}
    </div>

)