import React from "react";
import "./styles.css";
import RowContainer from "../../components/RowContainer";
import ColSpacer from "../../components/ColSpacer";

function Contact() {

    return (
        <div className="container">
            <RowContainer>
                <ColSpacer />
                <ColSpacer />
                <div className="col-lg-6 text-secondary">
                    <a href="mailto:andrewbautista85@gmail.com">
                        <button type="button" className="btn btn-info btn-circle btn-xl float-left"><i className="far fa-envelope"></i></button></a>&nbsp;&nbsp;
                <h5>&nbsp;&nbsp;&nbsp;&nbsp;<a href="mailto:andrewbautista85@gmail.com">andrewbautista85@gmail.com</a></h5>
                </div>
            </RowContainer>
            <br />
            <RowContainer>
                <ColSpacer />
                <ColSpacer />
                <div className="col-lg-6 text-secondary">
                    <a href="https://www.linkedin.com/in/andrewbautista85/">
                        <button type="button" className="btn btn-info btn-circle btn-xl float-left"><i className="fab fa-linkedin-in"></i></button></a>&nbsp;&nbsp;
                <h5>&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://www.linkedin.com/in/andrewbautista85/">linkedin.com/in/andrewbautista85</a></h5>
                </div>
            </RowContainer>
            <br />
            <RowContainer>
                <ColSpacer />
                <ColSpacer />
                <div className="col-lg-6 text-secondary">
                    <a href="https://twitter.com/AMBWebDev">
                        <button type="button" className="btn btn-info btn-circle btn-xl float-left"><i className="fab fa-twitter"></i></button></a>&nbsp;&nbsp;
                <h5>&nbsp;&nbsp;&nbsp;&nbsp;    <a href="https://twitter.com/AMBWebDev">@AMBWebDev</a></h5>
                </div>
            </RowContainer>
        </div >
    )
};

export default Contact;