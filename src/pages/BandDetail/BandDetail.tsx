// src/pages/BandDetail.tsx

import React from "react";

import { useParams } from "react-router-dom";

import HeroBanner from "components/HeroBanner";

import bandData from "content/bandData.json";
import { IBandData } from "types/IBandData";

import "./styles.scss";

const BandDetail: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const band = bandData.find((b: IBandData) => b.slug === slug);

    if (!band) {
        return <div>Band not found</div>; // Handle invalid slugs
    }

    return (
        <React.Fragment>
            <HeroBanner mediaType="image" src={`${process.env.PUBLIC_URL}/images/${band.photo}`} title={band.name} />
            <section>
                <div className="container">
                    <div className="band-details">
                        <h1>{band.name}</h1>
                        <h4>Formed in: {band.yearFormed}</h4>
                        <div className="band-info">
                            <p>{band.description}</p>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};

export default BandDetail;
