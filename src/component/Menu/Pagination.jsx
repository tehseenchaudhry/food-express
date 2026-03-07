import React from 'react';

const Pagination = ({ currentPage = 1, totalPages = 3 }) => {
  // 🚫 All functionality removed - Add your own logic
  const pages = [1, 2, 3]; // Static for design

  return (
    <div className="flex items-center justify-center gap-2 mt-8">
      {pages.map((page) => (
        <button
          key={page}
          className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-all ${
            page === currentPage
              ? 'bg-rose-700 text-white shadow-md'
              : 'bg-gray-100 text-gray-600 hover:bg-rose-100 hover:text-rose-700'
          }`}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;