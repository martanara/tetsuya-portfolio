import React from "react";

import HeroBanner from "components/HeroBanner";
import "./styles.scss";

const Music = () => {
    return (
        <React.Fragment>
            <HeroBanner mediaType="image" src={`${process.env.PUBLIC_URL}/images/hero-banner.JPG`} title="All music"/>
            <section className="music">
                <p>Welcome to music</p>
            </section>
        </React.Fragment>
    );
};

export default Music;