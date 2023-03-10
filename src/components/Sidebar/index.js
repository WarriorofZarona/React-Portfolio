import React from "react";
import { Avatar } from "../Avatar";
import { Pfp } from "../../assets/images";
import { NavList } from "../NavList";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export const Sidebar = ({ isMobile }) => {

    library.add(faBars)


    return (
        <div>
            {
                isMobile ?
                    (<nav style={{ display: 'flex', padding: 16, flexDirection: 'row', color: 'white', gap: 24, justifyContent: 'space-between', alignItems: 'center', width: '100%', height: '10vh', backgroundColor: '#2f2f2f' }}>
                        <div style={{ fontSize: 20, }}>Andrew Bautista</div>
                        <FontAwesomeIcon icon={faBars} size={"xl"} />
                    </nav>)
                    :
                    (<nav style={{ display: 'flex', paddingY: 16, flexDirection: 'column', color: 'white', gap: 24, justifyContent: 'center', alignItems: 'center', width: '100%', height: '100vh', backgroundColor: '#2f2f2f' }}>
                        <Avatar width='60%' height='auto' image={Pfp} borderColor="#999999" />
                        <NavList navItems={['about', 'experience', 'education', 'skills', 'interests', 'awards']} />
                    </nav>)
            }
        </div>
    )
}