import React from "react";

function EmailBtn() {
    return (
        <div className="col-lg-6">
            <a href="mailto:andrewbautista85@gmail.com">
                <button type="button" className="btn btn-info btn-circle btn-xl float-left"><i className="far fa-envelope"></i></button></a>&nbsp;&nbsp;
            <h5>&nbsp;&nbsp;&nbsp;&nbsp;<a className="text-secondary" href="mailto:andrewbautista85@gmail.com">andrewbautista85@gmail.com</a></h5>
        </div>
    )
};

export default EmailBtn;