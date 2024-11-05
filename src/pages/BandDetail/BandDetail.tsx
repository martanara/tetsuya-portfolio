// src/pages/BandDetail.tsx

import React from "react";
import { useParams } from "react-router-dom";
import bandData from "content/bandData.json";
import { IBandData } from "types/IBandData";

const BandDetail: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const band = bandData.find((b: IBandData) => b.slug === slug);

    if (!band) {
        return <div>Band not found</div>; // Handle invalid slugs
    }

    return (
        <div className="band-detail">
            <h1>{band.name}</h1>
            <div className="band-info">
                <img src={`${process.env.PUBLIC_URL}/images/${band.photo}`} alt={band.name} />
                <p>{band.description}</p>
                <p>Formed in: {band.yearFormed}</p>
            </div>
        </div>
    );
};

export default BandDetail;
