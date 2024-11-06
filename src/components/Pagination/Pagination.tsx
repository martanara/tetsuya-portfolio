import React from "react";

import "./styles.scss";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
    const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
        <section>
            <div className="container">
                <div className="pagination">
                    {pageNumbers.map(number => (
                        <button
                            key={number}
                            onClick={() => onPageChange(number)}
                            className={number === currentPage ? "active" : ""}
                        >
                            <p>{number}</p>
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pagination;
