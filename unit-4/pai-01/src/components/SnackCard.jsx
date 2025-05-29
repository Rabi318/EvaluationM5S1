import { ref, remove, update } from "firebase/database";
import React, { useState } from "react";

const SnackCard = ({ snack }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editSnack, setEditSnack] = useState({
    title: snack.title,
    category: snack.category,
    price: snack.price,
    rating: snack.rating,
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditSnack((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const hanldeEdit = () => {
    update(ref(db, `snacks/${snack.id}`), editSnack);
    setIsEditing(false);
  };
  const handleDelete = () => {
    if (Window.confirm("Are you sure you want to delete this snack?")) {
      remove(ref(db, `snacks/${snack.id}`));
    }
  };
  return (
    <div className="snack-card">
      {isEditing ? (
        <form>
          <input
            type="text"
            name="title"
            value={editSnack.title}
            onChange={handleChange}
          />
          <input
            type="text"
            name="category"
            value={editSnack.category}
            onChange={handleChange}
          />
          <input
            type="number"
            name="price"
            value={editSnack.price}
            onChange={handleChange}
          />
          <input
            type="text"
            name="rating"
            value={editSnack.rating}
            onChange={handleChange}
          />
          <button type="submit" onClick={hanldeEdit}>
            Save
          </button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </form>
      ) : (
        <>
          <h2>{snack.title}</h2>
          <p>Category: {snack.category}</p>
          <p>Price: {snack.price}</p>
          <p>Rating: {snack.rating}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </>
      )}
    </div>
  );
};

export default SnackCard;
