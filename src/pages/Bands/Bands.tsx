import React from "react";

import HeroBanner from "components/HeroBanner";

import "./styles.scss";

const Bands = () => {
    return (
        <React.Fragment>
            <HeroBanner mediaType="image" src={`${process.env.PUBLIC_URL}/images/hero-banner.JPG`} />
            <section className="bands">
                <p>Welcome to bands</p>
            </section>
        </React.Fragment>
    );
};

export default Bands;