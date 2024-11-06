import React from "react";

import "./styles.scss";
import Section from "components/Section";

import bandData from "content/bandData.json";
import { IBandData } from "types/IBandData";

const BandsSection = () => {
    return (
        <Section title="Music" container>
            <div className="bands-wrapper">
                {bandData.map((band: IBandData) => (
                    <a href={`/music/${band.slug}`} key={band.id} className="band" data-aos="zoom-in">
                        <div className="icon-wrapper"><img className="icon" src={`${process.env.PUBLIC_URL}/icons/${band.icon}`} alt="amp" /></div>
                        <div className="title"><h3>{band.name}</h3></div>
                        <div className="text">
                            <p>{band.description}</p>
                            <img className="band-photo" src={`${process.env.PUBLIC_URL}/images/${band.photo}`} alt="acid-sitter" />
                        </div>
                    </a>
                ))}
            </div>
        </Section>
    );
};

export default BandsSection;

