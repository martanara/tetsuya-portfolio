import React, { useEffect } from "react";

import AOS from 'aos';

import "./styles.scss";
import Section from "components/Section";

const AboutSection = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
        });
    }, []);

    return (
        <Section title="About" container id={'about-section'}>
            <div className="about-wrapper" data-aos="zoom-in">
                <div className="about-image">
                    <img src={`${process.env.PUBLIC_URL}/images/about-tetsuya.jpg`} alt="tetsuya nara" />
                </div>
                <div className="about-text">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget nunc non velit sagittis pharetra. Nulla ut laoreet metus. Duis auctor semper elit, eu sagittis lectus euismod in.
                        Nullam sagittis nisl id mauris tempus efficitur. Sed in nisi ultrices tortor vehicula lobortis. Praesent sodales, ante id dictum vestibulum, lectus diam viverra urna, vitae sollicitudin felis est non justo.
                        Phasellus eleifend massa sit amet nisl congue, quis mollis elit malesuada. Phasellus arcu dolor, mollis sit amet auctor sit amet, rutrum ac mi.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget nunc non velit sagittis pharetra. Nulla ut laoreet metus. Duis auctor semper elit, eu sagittis lectus euismod in.
                        Nullam sagittis nisl id mauris tempus efficitur. Sed in nisi ultrices tortor vehicula lobortis. Praesent sodales, ante id dictum vestibulum, lectus diam viverra urna, vitae sollicitudin felis est non justo.
                        Phasellus eleifend massa sit amet nisl congue, quis mollis elit malesuada. Phasellus arcu dolor, mollis sit amet auctor sit amet, rutrum ac mi.
                    </p>
                </div>
            </div>
        </Section>
    );
};

export default AboutSection;

