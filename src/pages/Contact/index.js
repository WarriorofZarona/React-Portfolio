import React from "react";
import "./styles.css";
import RowContainer from "../../components/RowContainer";
import ColSpacer from "../../components/ColSpacer";
import Container from "../../components/Container";
import EmailBtn from "../../components/EmailBtn";
import LinkedInBtn from "../../components/LinkedInBtn";
import TwitterBtn from "../../components/TwitterBtn";

function Contact() {

    return (
        <Container>
            <RowContainer>
                <ColSpacer />
                <ColSpacer />
                <EmailBtn />
            </RowContainer>
            <br />
            <RowContainer>
                <ColSpacer />
                <ColSpacer />
                <LinkedInBtn />
            </RowContainer>
            <br />
            <RowContainer>
                <ColSpacer />
                <ColSpacer />
                <TwitterBtn />
            </RowContainer>
        </Container>
    )
};

export default Contact;