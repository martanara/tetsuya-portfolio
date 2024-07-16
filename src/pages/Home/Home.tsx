import React, { useEffect, useState } from "react";

import { fetchBlogPosts } from "services/contentfulService";
import { IBlogPost } from "interfaces";
import "./styles.scss";

const Home = () => {
    const [posts, setPosts] = useState<IBlogPost[]>([]);

    useEffect(() => {
        const getPosts = async () => {
            const blogPosts = await fetchBlogPosts();
            setPosts(blogPosts);
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
                    {posts.map((post) => (
                        <div key={post.id}>
                            <h2>{post.title}</h2>
                            {post.image.url && (
                                <img src={post.image.url} alt={post.image.title} style={{ maxWidth: '100%' }} />
                            )}
                            <p>{post.date}</p>
                            {post.body.map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                        </div>
                    ))}
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

