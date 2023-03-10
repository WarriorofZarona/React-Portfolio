import React from "react";
import { Avatar } from "../Avatar";
import { Pfp } from "../../assets/images";
import { NavList } from "../NavList";

export const Sidebar = () => (

    <nav style={{ display: 'flex', flexDirection: 'column', color: 'white', gap: 24, justifyContent: 'center', alignItems: 'center', width: '17rem', height: '100vh', backgroundColor: '#2f2f2f' }}>
        <Avatar width='60%' height='auto' image={Pfp} borderColor="#999999" />
        <NavList navItems={['about', 'experience', 'education', 'skills', 'interests', 'awards']} />
    </nav>

)