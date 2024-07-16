import React from "react";

import "./styles.scss";

const Home = () => {
    return (
        <div className="home">
            <section>
                <div className="container">
                    Gallery
                </div>
            </section>
            <section>
                <div className="container">
                    About me
                </div>
            </section>
            <section>
                <div className="container">
                    Blog
                </div>
            </section>
            <section>
                <div className="container">
                    Contact
                </div>
            </section>
        </div>
    );
};

export default Home;