import React from "react";

import HeroBanner from "components/HeroBanner";
import BandsSection from "sections/BandsSection";
import AboutSection from "sections/AboutSection";
import ContactSection from "sections/ContactSection";

import "./styles.scss";

const Home = () => {
    return (
        <div className="home">
            <HeroBanner mediaType="video" src={`${process.env.PUBLIC_URL}/videos/homepage-hero.mp4`}/>
            <AboutSection />
            <BandsSection />
            <ContactSection />
        </div>
    );
};

export default Home;

