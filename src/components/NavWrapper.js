import React from "react";

function NavWrapper(props) {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom border-info sticky-top">
            {props.children}
        </nav>
    )
};

export default NavWrapper;