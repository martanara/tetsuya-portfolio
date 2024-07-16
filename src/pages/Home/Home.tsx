import React, { useEffect, useState } from "react";

import "./styles.scss";
import { fetchBlogPosts } from "plugins/contentfulService";

const Home = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const getPosts = async () => {
            const blogPosts = await fetchBlogPosts();
            console.log(blogPosts);
        };
        getPosts();
    }, []);
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

