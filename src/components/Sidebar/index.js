import React, { useState } from "react";
import { Avatar } from "../Avatar";
import { Pfp } from "../../assets/images";
import { NavList } from "../NavList";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { usePopper } from "react-popper";

library.add(faBars)

export const Sidebar = ({ isMobile }) => {
    // Reference element
    const [buttonEl, setButtonEl] = useState(null);
    // Popper element
    const [navMenuEl, setNavMenuEl] = useState(null);

    // Arrow element
    // eslint-disable-next-line no-unused-vars
    const [arrowElement, setArrowElement] = useState(null)
    const [showMenu, setShowMenu] = useState(false);
    const { styles, attributes } = usePopper(buttonEl, navMenuEl, {
        placement: "bottom-end",
        offset: [0, 20],
        modifiers: [{ name: 'offset', options: { offset: [16, 24] } }]
    })

    const toggleMenu = (event) => {
        setShowMenu(!showMenu)
    }

    const navItems = ['about', 'experience', 'education', 'skills', 'interests', 'awards']

    return (
        <div>
            {
                isMobile ?
                    (<nav style={{ position: 'relative', display: 'flex', padding: 16, flexDirection: 'row', color: 'white', gap: 24, justifyContent: 'space-between', alignItems: 'center', width: '100%', height: '10vh', backgroundColor: '#2f2f2f' }}>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: 20, }}>Andrew Bautista</div>
                        <button ref={setButtonEl} style={{ background: 'transparent', border: '0' }} onClick={toggleMenu}>
                            <FontAwesomeIcon icon={faBars} size={"xl"} color='white' />
                        </button>
                        <div ref={setNavMenuEl} style={{ ...styles.popper, display: showMenu ? 'inherit' : 'none' ,position: 'absolute', zIndex: 100 }} {...attributes.popper}>
                            <NavList isMobile navItems={navItems} style={{background: '#2f2f2f', borderRadius: '0 0 0 4px', padding: '10px 20px', listStyleType: 'none'}} />
                            <div ref={setArrowElement} style={styles.arrow} />
                        </div>
                    </nav>)
                    :
                    (<nav style={{ display: 'flex', paddingY: 16, flexDirection: 'column', color: 'white', gap: 24, justifyContent: 'center', alignItems: 'center', width: '100%', height: '100vh', backgroundColor: '#2f2f2f' }}>
                        <Avatar width='60%' height='auto' image={Pfp} borderColor="#999999" />
                        <NavList navItems={navItems} />
                    </nav>)
            }
        </div >
    )
}