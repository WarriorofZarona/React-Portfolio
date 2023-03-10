import React from "react";
import MainContainer from "../../components/MainContainer";
import { Sidebar } from "../../components/Sidebar";
import { useMediaQuery } from 'react-responsive'


export const Home = () => {

    const isMobile = useMediaQuery({ query: '(max-width: 992px' })

    return (
        <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row' }}>
            <Sidebar isMobile={isMobile} />
            <MainContainer />
        </div>
    )
};