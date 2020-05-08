import React from "react";
import NavWrapper from "./NavWrapper";
import Logo from "./Logo";

function Header() {
    return (
        <header>
            <NavWrapper>
                <Logo />

                <!-- Toggler button-->
        <button class="navbar-toggler collapsed" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <!-- Nav Links, when collapsed it becomes a dropdown menu-->
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" href="index.html"><i
                                class="far fa-address-card mr-1"></i>About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="portfolio.html"><i
                                class="fas fa-project-diagram mr-1"></i>Portfolio</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="contact.html"><i class="far fa-envelope mr-1"></i>Contact</a>
                        </li>
                    </ul>
                </div>
                </div>
            </NavWrapper>
        </header >
    )
}
export default Header;