import React, { ReactNode, useEffect } from "react";

import AOS from 'aos';

import "./styles.scss";
interface ISectionProps {
    children: ReactNode;
    container: boolean;
    title?: string;
    id?: string;
}

const Section = (props: ISectionProps) => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
        });
    }, []);

    return (
        <section id={props.id}>
            {props.title && (
                <div className="container">
                    <h2 data-aos="fade-right" className="section-title">{props.title}</h2>
                </div>
            )}
            {props.container ? (
                <div className="container">
                    {props.children}
                </div>
            ) : (
                <React.Fragment>
                    {props.children}
                </React.Fragment>
            )}
        </section>
    );
};

export default Section;