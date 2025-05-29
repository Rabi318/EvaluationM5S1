import React, { useContext, useState } from "react";
import { SnackContext } from "../contexts/SnackContext";
import SnackCard from "./SnackCard";
import FilterSort from "./FilterSort";

const items_per_page = 6;

// function SnackGrid() {
//   const { snacks } = useContext(SnackContext);
//   const [currentPage, setCurrentPage] = useState(1);
//   const totalPages = Math.ceil(snacks.length / items_per_page);
//   const paginatedSnacks = snacks.slice(
//     (currentPage - 1) * items_per_page,
//     currentPage * items_per_page
//   );
//   const [category, setCategory] = useState("");
//   const [sortOption, setSortOption] = useState("");

//   const filteredSnacks = snacks
//     .filter((snack) => !category || snack.category === category)
//     .sort((snackA, snackB) => {
//       switch (sortOption) {
//         case "title-asc":
//           return snackA.title.localeCompare(snackB.title);
//         case "title-desc":
//           return snackB.title.localeCompare(snackA.title);
//         case "price-asc":
//           return snackA.price - snackB.price;
//         case "price-desc":
//           return snackB.price - snackA.price;
//         case "rating-asc":
//           return snackA.rating - snackB.rating;
//         case "rating-desc":
//           return snackB.rating - snackA.rating;
//         default:
//           return 0;
//       }
//     });
//   const goToPage = (pageNum) => {
//     if (pageNum >= 1 && pageNum <= totalPages) {
//       setCurrentPage(pageNum);
//     }
//   };
//   return (
//     <div>
//       <FilterSort
//         category={category}
//         setCategory={setCategory}
//         sortOption={sortOption}
//         setSortOption={setSortOption}
//       />
//       <div className="snack-grid">
//         {paginatedSnacks.map((snack) => (
//           <SnackCard key={snack.id} snack={snack} />
//         ))}
//       </div>
//       <div className="pagination">
//         <button
//           onClick={() => goToPage(currentPage - 1)}
//           disabled={currentPage === 1}
//         >
//           Prev
//         </button>
//         <button
//           onClick={() => goToPage(currentPage + 1)}
//           disabled={currentPage === totalPages}
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// }
function SnackGrid() {
  const { snacks } = useContext(SnackContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [category, setCategory] = useState("all");
  const [sortOption, setSortOption] = useState("");

  const filteredSnacks = snacks
    .filter((snack) => category === "all" || snack.category === category)
    .sort((a, b) => {
      switch (sortOption) {
        case "title-asc":
          return a.title.localeCompare(b.title);
        case "title-desc":
          return b.title.localeCompare(a.title);
        case "price-asc":
          return a.price - b.price;
        case "price-desc":
          return b.price - a.price;
        case "rating-asc":
          return a.rating - b.rating;
        case "rating-desc":
          return b.rating - a.rating;
        default:
          return 0;
      }
    });

  const totalPages = Math.ceil(filteredSnacks.length / items_per_page);

  const paginatedSnacks = filteredSnacks.slice(
    (currentPage - 1) * items_per_page,
    currentPage * items_per_page
  );

  const goToPage = (pageNum) => {
    if (pageNum >= 1 && pageNum <= totalPages) {
      setCurrentPage(pageNum);
    }
  };

  // Reset to page 1 if filter/sort changes
  React.useEffect(() => {
    setCurrentPage(1);
  }, [category, sortOption]);

  return (
    <div>
      <FilterSort
        category={category}
        setCategory={setCategory}
        sortOption={sortOption}
        setSortOption={setSortOption}
      />
      <div className="snack-grid">
        {paginatedSnacks.map((snack) => (
          <SnackCard key={snack.id} snack={snack} />
        ))}
      </div>
      <div className="pagination">
        <button
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default SnackGrid;
