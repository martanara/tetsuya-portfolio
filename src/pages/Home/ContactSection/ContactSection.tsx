import React, { useEffect } from "react";

import AOS from 'aos';

import Section from "components/Section";

import "./styles.scss";

const emailAddress = "tetsuya.nara0203@gmail.com";

const ContactSection = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
        });
    }, []);

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
            <div className="contact-wrapper" data-aos="zoom-in">
                <img src={`${process.env.PUBLIC_URL}/images/contact.jpg`} alt="tetsuya nara" />
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

