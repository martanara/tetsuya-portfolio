import React, { useState } from "react";

import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import { useAppContext } from "context";

import HeroBanner from "components/HeroBanner";
import Pagination from "components/Pagination";
import Loader from "components/Loader";

import { INewsPost } from "types/INewsPost";

import "./styles.scss";

const News = () => {
    const { newsPosts } = useAppContext();
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 5;

    if (newsPosts.length === 0) {
        return <Loader />;
    }

    const sortedPosts: INewsPost[] = [...newsPosts].sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    const totalPages = Math.ceil(sortedPosts.length / postsPerPage);
    const startIndex = (currentPage - 1) * postsPerPage;
    const currentPosts = sortedPosts.slice(startIndex, startIndex + postsPerPage);

    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    return (
        <React.Fragment>
            <HeroBanner
                mediaType="image"
                src={`${process.env.PUBLIC_URL}/images/hero-banner.JPG`}
                title="Latest news"
            />
            <section>
                <div className="container">
                    {currentPosts.map((newsPost) => (
                        <div key={newsPost.id}>
                            <h2>{newsPost.title}</h2>
                            {newsPost.image.url && (
                                <img src={newsPost.image.url} alt={newsPost.image.title} />
                            )}
                            <p>{newsPost.date}</p>
                            {documentToReactComponents(newsPost.body)}
                        </div>
                    ))}
                </div>
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                />
            </section>
        </React.Fragment>
    );
};

export default News;
