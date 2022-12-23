import React from "react";
import { Sidebar } from "../../components/Sidebar";

export const Home = () => (
    <div style={{ display: 'flex' }}>
        <Sidebar />
        <div>Body here</div>
    </div>
);