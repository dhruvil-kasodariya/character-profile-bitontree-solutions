// Pagination.tsx
import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const renderPageNumbers = () => {
    const pageNumbers: React.ReactNode[] = [];

    const isPrevPageVisible = currentPage > 1;
    const isNextPageVisible = currentPage < totalPages;

    // Previous page
    if (isPrevPageVisible) {
      pageNumbers.push(
        <li
          key="prev"
          className="px-3 py-1 cursor-pointer inline-block"
          onClick={() => onPageChange(currentPage - 1)}
        >
          {currentPage - 1}
        </li>
      );
    }

    // Current page
    pageNumbers.push(
      <li key={currentPage} className="bg-blue-500 text-white px-3 py-1 cursor-pointer inline-block">
        {currentPage}
      </li>
    );

    // Next page
    if (isNextPageVisible) {
      pageNumbers.push(
        <li
          key="next"
          className="px-3 py-1 cursor-pointer inline-block"
          onClick={() => onPageChange(currentPage + 1)}
        >
          {currentPage + 1}
        </li>
      );
    }

    // "..." for remaining pages
    if (totalPages > 3) {
      if (currentPage > 2) {
        pageNumbers.unshift(<li key="dots-start">...</li>);
      }

      if (currentPage < totalPages - 1) {
        pageNumbers.push(<li key="dots-end">...</li>);
      }

      if (currentPage === 1) {
        pageNumbers.push(
          <li
            key={totalPages}
            className="px-3 py-1 cursor-pointer inline-block"
            onClick={() => onPageChange(totalPages)}
          >
            {totalPages}
          </li>
        );
      }
    }

    return pageNumbers;
  };

  return (
    <div className="mt-4">
    <ul className="flex space-x-2">
      <li
        className={`${
          currentPage === 1 ? 'hidden' : 'block'
        } px-3 py-1 cursor-pointer inline-block`}
        onClick={() => onPageChange(currentPage - 1)}
      >
        Prev
      </li>
      {renderPageNumbers()}
      <li
        className={`${
          currentPage === totalPages ? 'hidden' : 'block'
        } px-3 py-1 cursor-pointer inline-block`}
        onClick={() => onPageChange(currentPage + 1)}
      >
        Next
      </li>
    </ul>
  </div>
  );
};

export default Pagination;


