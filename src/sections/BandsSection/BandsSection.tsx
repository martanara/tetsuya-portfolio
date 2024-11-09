import React from "react";

import "./styles.scss";
import Section from "components/Section";

import bandData from "content/bandData.json";
import { IBandData } from "types/IBandData";

const BandsSection = () => {
    return (
        <Section title="Music" container>
            <div className="bands-wrapper">
                {bandData.reduce((rows: JSX.Element[][], band: IBandData, index: number) => {
                    if (index % 3 === 0) rows.push([]);
                    rows[rows.length - 1].push(
                        <div key={band.id} className="band">
                            <div className="icon-wrapper">
                                <img className="icon" src={`${process.env.PUBLIC_URL}/icons/${band.icon}`} alt="amp" />
                            </div>
                            <a href={`/music/${band.slug}`} className="title">
                                <h3>{band.name}</h3>
                            </a>
                            <div className="text">
                                <p>{band.description}</p>
                                <img className="band-photo" src={`${process.env.PUBLIC_URL}/images/${band.photo}`} alt="acid-sitter" />
                            </div>
                        </div>
                    );
                    return rows;
                }, []).map((row, rowIndex) => (
                    <div className="band-row" key={rowIndex} data-aos="zoom-in">
                        {row}
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default BandsSection;

