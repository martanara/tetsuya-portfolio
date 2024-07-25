import React from "react";

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import { useAppContext } from "context";

import Loader from "components/Loader";

import "./styles.scss";
import HeroBanner from "components/HeroBanner";
import BandsSection from "./BandsSection";

const Home = () => {
    const { posts } = useAppContext();

    if (posts.length === 0) {
        return <Loader />
    }

    return (
        <div className="home">
            <HeroBanner mediaType="video" src={`${process.env.PUBLIC_URL}/homepage-hero.mp4`}/>
            <BandsSection />
            <section>
                <div className="container">
                    Contact
                </div>
            </section>
        </div>
    );
};

export default Home;

