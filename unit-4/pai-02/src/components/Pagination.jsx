import React from "react";

const Pagination = ({ currentPage, onPageChange, totalItems }) => {
  const totalPages = Math.ceil(totalItems / 20);

  return (
    <div className="flex justify-center items-center space-x-2">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="p-2 bg-blue-500 text-white rounded disabled:bg-gray-400"
      >
        Prev
      </button>
      <span>
        Page {currentPage} of {totalPages}
      </span>
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="p-2 bg-blue-500 text-white rounded disabled:bg-gray-400"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
