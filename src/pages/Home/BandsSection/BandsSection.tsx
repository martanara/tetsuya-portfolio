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
                    <div key={band.id} className="band" data-aos="zoom-in">
                        <div className="icon-wrapper"><img className="icon" src={`${process.env.PUBLIC_URL}/icons/${band.icon}`} alt="amp" /></div>
                        <h3 className="title">{band.name}</h3>
                        <div className="text">
                            <p>{band.description}</p>
                            <img className="band-photo" src={`${process.env.PUBLIC_URL}/images/${band.photo}`} alt="acid-sitter" />
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default BandsSection;

