import React from "react";

const FilterSort = ({ category, setCategory, sortOption, setSortOption }) => {
  return (
    <div className="controls">
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="all">All</option>
        <option value="Sweet">Sweet</option>
        <option value="Savory">Savory</option>
        <option value="Beverage">Beverage</option>
        <option value="Baked">Baked</option>
      </select>

      <select
        value={sortOption}
        onChange={(e) => setSortOption(e.target.value)}
      >
        <option value="">Sort by</option>
        <option value="title-asc">Title (A-Z)</option>
        <option value="title-desc">Title (Z-A)</option>
        <option value="price-asc">Price (Low to High)</option>
        <option value="price-desc">Price (High to Low)</option>
        <option value="rating-asc">Rating (Low to High)</option>
        <option value="rating-desc">Rating (High to Low)</option>
      </select>
    </div>
  );
};

export default FilterSort;
