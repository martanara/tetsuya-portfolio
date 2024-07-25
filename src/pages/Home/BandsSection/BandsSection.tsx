import React, { useEffect } from "react";

import AOS from 'aos';

import "./styles.scss";
import Section from "components/Section";

const BandsSection = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
        });
    }, []);

    return (
        <Section title="Projects">
            <div className="bands-wrapper">
                <div className="band" data-aos="zoom-in">
                    <div className="icon-wrapper"><img className="icon" src={`${process.env.PUBLIC_URL}/icons/amp-icon.svg`} alt="amp" /></div>
                    <h3 className="title">AcidSitter</h3>
                    <div className="text">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque orci nulla, dignissim ut pretium sit amet, sodales vitae est.</p>
                        <p>Suspendisse vel orci varius, ullamcorper metus vitae, eleifend orci. Praesent vestibulum vulputate arcu at finibus.</p>
                        <img className="band-photo" src={`${process.env.PUBLIC_URL}/images/acid-sitter.jpeg`} alt="acid-sitter" />
                    </div>
                </div>
                <div className="band" data-aos="zoom-in">
                    <div className="icon-wrapper"><img className="icon" src={`${process.env.PUBLIC_URL}/icons/keyboard_music-icon.svg`} alt="keyboard" /></div>
                    <h3 className="title">Sour Noir</h3>
                    <div className="text">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque orci nulla, dignissim ut pretium sit amet, sodales vitae est.</p>
                        <p>Suspendisse vel orci varius, ullamcorper metus vitae, eleifend orci. Praesent vestibulum vulputate arcu at finibus.</p>
                        <img className="band-photo" src={`${process.env.PUBLIC_URL}/images/sour-noir.jpg`} alt="sour noir" />
                    </div>
                </div>
                <div className="band" data-aos="zoom-in">
                    <div className="icon-wrapper"><img className="icon" src={`${process.env.PUBLIC_URL}/icons/drum_set-icon.svg`} alt="drum set" /></div>
                    <h3 className="title">Tumbling Walls</h3>
                    <div className="text">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque orci nulla, dignissim ut pretium sit amet, sodales vitae est.</p>
                        <p>Suspendisse vel orci varius, ullamcorper metus vitae, eleifend orci. Praesent vestibulum vulputate arcu at finibus.</p>
                    </div>
                    <img className="band-photo" src={`${process.env.PUBLIC_URL}/images/tumbling-walls.jpg`} alt="tumbling-walls" />
                </div>
            </div>
        </Section>
    );
};

export default BandsSection;

