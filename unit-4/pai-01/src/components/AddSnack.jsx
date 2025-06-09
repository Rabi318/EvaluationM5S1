import { ref, set } from "firebase/database";
import React, { use, useState } from "react";
import { db } from "../firebase";

const AddSnack = () => {
  const [snack, setSnack] = useState({
    title: "",
    category: "",
    price: "",
    rating: "",
  });
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSnack((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const id = `snk_${Date.now()}`;
      set(ref(db, "snacks/" + id), {
        ...snack,
        id,
        createdAt: Date.now(),
      });
      setSnack({
        title: "",
        category: "",
        price: "",
        rating: "",
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        value={snack.title}
        onChange={handleChange}
        placeholder="title"
        required
      />
      <input
        type="text"
        name="category"
        value={snack.category}
        onChange={handleChange}
        placeholder="category"
        required
      />
      <input
        type="number"
        name="price"
        value={snack.price}
        onChange={handleChange}
        placeholder="price"
        required
      />
      <input
        type="number"
        name="rating"
        value={snack.rating}
        onChange={handleChange}
        placeholder="rating"
        required
      />
      <button type="submit">{loading ? "Adding..." : "Add Snack"}</button>
    </form>
  );
};

export default AddSnack;
