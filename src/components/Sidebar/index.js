import React from "react";
import { Avatar } from "../Avatar";
import { Pfp } from "../../assets/images";
import { NavItem } from "../NavList/NavItem";
import { NavList } from "../NavList";

export const Sidebar = () => (

    <nav style={{ display: 'flex', flexDirection: 'column', color: 'white', gap: 24, justifyContent: 'center', alignItems: 'center', width: '17rem', height: '100vh', backgroundColor: '#006abc' }}>
        <Avatar image={Pfp} borderColor="#0098f1" />
        <NavList navItems={['Nav list here', 'Nav list here', 'Nav list here', 'Nav list here', 'Nav list here']} />
    </nav>

)