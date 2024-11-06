import React from "react";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import { useAppContext } from "context";

import Loader from "components/Loader";

import "./styles.scss";
import HeroBanner from "components/HeroBanner";

const News = () => {
    const { newsPosts } = useAppContext();

    if (newsPosts.length === 0) {
        return <Loader />
    }

    return (
        <React.Fragment>
            <HeroBanner mediaType="image" src={`${process.env.PUBLIC_URL}/images/hero-banner.JPG`} title="Latest news"/>
            <section>
                <div className="container">
                    {newsPosts.map((newsPost) => (
                        <div key={newsPost.id}>
                            <h2>{newsPost.title}</h2>
                            {newsPost.image.url && (
                                <img src={newsPost.image.url} alt={newsPost.image.title} />
                            )}
                            <p>{newsPost.date}</p>
                            {documentToReactComponents(newsPost.body)}
                        </div>
                    ))}
                </div>
            </section>
        </React.Fragment>
    );
};

export default News;