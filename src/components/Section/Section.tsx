import React, { ReactNode } from "react";

import "./styles.scss";
interface ISectionProps {
    children: ReactNode;
    container: boolean;
    title?: string;
    id?: string;
}

const Section = (props: ISectionProps) => {
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