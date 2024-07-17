import React, { useEffect, useState } from "react";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { fetchBlogPosts } from "services/contentfulService";
import { IBlogPost } from "interfaces";
import "./styles.scss";
import Loader from "components/Loader";

const Home = () => {
    const [posts, setPosts] = useState<IBlogPost[]>([]);

    useEffect(() => {
        const getPosts = async () => {
            const blogPosts = await fetchBlogPosts();
            setPosts(blogPosts);
        };
        getPosts();
    }, []);

    if (posts.length === 0) {
        return <Loader />
    }

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
                            {documentToReactComponents(post.body)}
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

