import React from "react";
import { Avatar } from "../Avatar";
import { Pfp } from "../../assets/images";

export const Sidebar = () => (

    <nav style={{ display: 'flex', flexDirection: 'column', color: 'white', gap: 16, justifyContent: 'center', alignItems: 'center', width: '17rem', height: '100vh', backgroundColor: '#006abc' }}>
        <Avatar image={Pfp} borderColor="#0098f1" />
        <div>Nav item here</div>
        <div>Nav item here</div>
        <div>Nav item here</div>
        <div>Nav item here</div>
        <div>Nav item here</div>
    </nav>

)