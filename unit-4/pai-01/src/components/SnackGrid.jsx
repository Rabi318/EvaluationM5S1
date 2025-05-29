import React, { useContext } from "react";
import { SnackContext } from "../contexts/SnackContext";
import SnackCard from "./SnackCard";

function SnackGrid() {
  const { snacks } = useContext(SnackContext);
  return (
    <div className="snack-grid">
      {snacks.map((snack) => (
        <SnackCard key={snack.id} snack={snack} />
      ))}
    </div>
  );
}

export default SnackGrid;
