import React from "react";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import { useAppContext } from "context";

import Loader from "components/Loader";

import "./styles.scss";

const News = () => {
    const { posts } = useAppContext();

    if (posts.length === 0) {
        return <Loader />
    }
    
    return (
        <>
            <section className="News">
                <p>Welcome to News</p>
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

export default News;