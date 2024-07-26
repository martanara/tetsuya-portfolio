import React from "react";

import HeroBanner from "components/HeroBanner";

import "./styles.scss";

const Projects = () => {
    return (
        <React.Fragment>
            <HeroBanner mediaType="image" src={`${process.env.PUBLIC_URL}/images/hero-banner.JPG`} />
            <section className="projects">
                <p>Welcome to projects</p>
            </section>
        </React.Fragment>
    );
};

export default Projects;