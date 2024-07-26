import React from "react";

import Section from "components/Section";

import "./styles.scss";

const emailAddress = "tetsuya.nara0203@gmail.com";

const ContactSection = () => {
    const handleCopyToClipboard = (email: string) => {
        navigator.clipboard.writeText(email)
            .then(() => {
                alert("Copied to clipboard!");
            })
            .catch((err) => {
                console.error("Failed to copy email: ", err);
            });
    };

    return (
        <Section container={false} id={'contact-section'}>
            <div className="contact-wrapper">
                <div className="contact-details-overlay" />
                <div className="contact-details">
                    Contact: 
                    <button onClick={() => handleCopyToClipboard(emailAddress)}>
                        {emailAddress}
                    </button>
                </div>
            </div>
        </Section>
    );
};

export default ContactSection;

