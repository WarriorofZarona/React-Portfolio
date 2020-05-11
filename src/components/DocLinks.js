import React from "react";
import Resume from "../assets/docs/Resume.pdf"

function DocLinks() {
    return (
        <ul className="list-unstyled">
            <li><p><a href={Resume}><button type="button" className="btn btn-info rounded"><i
                className="far fa-file">&nbsp;</i>
                    Resume</button></a></p></li>
            <li><p><a href="https://github.com/warriorofzarona"><button type="button"
                className="btn btn-info rounded"><i className="fab fa-github">&nbsp;</i>
                    Github</button></a></p></li>
            <li><p><a href="https://www.linkedin.com/in/andrewbautista85/"><button type="button"
                className="btn btn-info rounded"><i className="fab fa-linkedin-in">&nbsp;</i>
                    LinkedIn</button></a></p></li>
        </ul>
    )
};

export default DocLinks;