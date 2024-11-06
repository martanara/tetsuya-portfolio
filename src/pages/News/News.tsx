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
                    <div className="news-wrapper">
                        {currentPosts.map((newsPost) => (
                            <div key={newsPost.id} className="news">
                                <div className="news-header">
                                    <h3>{newsPost.date}</h3>
                                    <h2>{newsPost.title}</h2>
                                </div>
                                <div className="news-body">
                                    {newsPost.image.url && (
                                        <div className="image-wrapper">
                                            <img src={newsPost.image.url} alt={newsPost.image.title} />
                                        </div>
                                    )}
                                    <div className="text-wrapper">
                                        {documentToReactComponents(newsPost.body)}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
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
