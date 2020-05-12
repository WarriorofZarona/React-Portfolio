import React from "react";
import { Pfp } from "../assets/images/";

function ProfilePicture() {
    return (
        <figure className="figure" >
            <img src={Pfp} class="img-fluid img-thumbnail figure-img rounded"
                alt="Profile Picture" />
            <figcaption className="figure-caption">Andrew Bautista</figcaption>
        </figure >
    )
};

export default ProfilePicture;