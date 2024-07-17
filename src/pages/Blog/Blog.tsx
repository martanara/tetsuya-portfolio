import React from "react";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import "./styles.scss";
import { useAppContext } from "context";

const Blog = () => {
    const { posts } = useAppContext();
    
    return (
        <>
            <section className="blog">
                <p>Welcome to blog</p>
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
        </>
    );
};

export default Blog;