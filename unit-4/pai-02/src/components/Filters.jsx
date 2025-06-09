import React from "react";

const Filters = ({ filter, sort, onFilterChange, onSortChange }) => {
  return (
    <div className="flex justify-between items-center mb-4">
      <input
        type="text"
        value={filter}
        onChange={onFilterChange}
        placeholder="Filter by name"
        className="p-2 border rounded"
      />
      <select
        value={sort}
        onChange={onSortChange}
        className="p-2 border rounded"
      >
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
    </div>
  );
};

export default Filters;
