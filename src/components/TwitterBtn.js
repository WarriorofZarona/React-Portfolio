import React from "react";

function TwitterBtn() {
    return (
        <div className="col-lg-6">
            <a href="https://twitter.com/AMBWebDev">
                <button type="button" className="btn btn-info btn-circle btn-xl float-left"><i className="fab fa-twitter"></i></button></a>&nbsp;&nbsp;
            <h5>&nbsp;&nbsp;&nbsp;&nbsp;    <a className="text-secondary" href="https://twitter.com/AMBWebDev">@AMBWebDev</a></h5>
        </div>
    )
};

export default TwitterBtn;