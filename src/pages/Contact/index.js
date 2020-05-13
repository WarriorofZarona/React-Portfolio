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
                <h5>&nbsp;&nbsp;&nbsp;&nbsp;andrewbautista85@gmail.com</h5>
                </div>
            </RowContainer>
            <br />
            <RowContainer>
                <div className="col-lg-12 text-secondary">
                    <a href="mailto:andrewbautista85@gmail.com">
                        <button type="button" className="btn btn-info btn-circle btn-md"><i className="far fa-envelope"></i></button></a>&nbsp;&nbsp;
              andrewbautista85@gmail.com
          </div>
            </RowContainer>
            <br />
            <RowContainer>
                <div className="col-lg-12 text-secondary">
                    <a href="mailto:andrewbautista85@gmail.com">
                        <button type="button" className="btn btn-info btn-circle btn-md"><i className="far fa-envelope"></i></button></a>&nbsp;&nbsp;
            andrewbautista85@gmail.com
        </div>
            </RowContainer>
        </div>
    )
};

export default Contact;