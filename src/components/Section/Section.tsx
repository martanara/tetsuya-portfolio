import React, { ReactNode } from "react";

import "./styles.scss";

interface ISectionProps {
    children: ReactNode;
    title?: string;
}

const Section = (props: ISectionProps) => {
    return (
        <section>
            <div className="container">
                <h2 className="section-title">{props.title}</h2>
                {props.children}
            </div>
        </section>
    );
};

export default Section;