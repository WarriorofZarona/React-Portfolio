import React from "react";
import ProfilePicture from "./ProfilePicture";

function SideContent() {
    return (
        <div className="col-lg-3">
            <div className="text-center">
                <ProfilePicture />
                {/* <DocLinks /> */}
            </div>
        </div>
    )
};

export default SideContent;