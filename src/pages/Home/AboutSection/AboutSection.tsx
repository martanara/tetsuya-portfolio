import React from "react";

import "./styles.scss";
import Section from "components/Section";

import aboutData from "content/aboutData.json";
import { IAboutData } from "types/IAboutData";

const AboutSection: React.FC = () => {
    const data = aboutData as IAboutData; // Cast the JSON import as IAboutData

    return (
        <Section title="About" container id={'about-section'}>
            <div className="about-wrapper" data-aos="zoom-in">
                <div className="about-image">
                    <img src={`${process.env.PUBLIC_URL}/images/${data.photo}`} alt={`${data.photo}`} />
                </div>
                <div className="about-text">
                    <p>{data.description1}</p>
                    <p>{data.description2}</p>
                </div>
            </div>
        </Section>
    );
};

export default AboutSection;

