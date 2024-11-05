import React from "react";

import HeroBanner from "components/HeroBanner";
import BandsSection from "sections/BandsSection";

import "./styles.scss";

const Music = () => {
    return (
        <React.Fragment>
            <HeroBanner mediaType="image" src={`${process.env.PUBLIC_URL}/images/hero-banner.JPG`} title="Music"/>
            <BandsSection />
        </React.Fragment>
    );
};

export default Music;