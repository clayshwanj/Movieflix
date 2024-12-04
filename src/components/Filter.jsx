import React, { useState } from "react";

const Filter = ({ onFilter }) => {
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("");

  const handleFilter = () => {
    onFilter(title, rating);
  };

  return (
    <div style={{ margin: "20px", textAlign: "center" }}>
      <input
        type="text"
        placeholder="Search by Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ marginRight: "10px", padding: "5px" }}
      />
      <input
        type="number"
        placeholder="Search by Rating"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        style={{ marginRight: "10px", padding: "5px" }}
      />
      <button onClick={handleFilter} style={{ padding: "5px 10px" }}>
        Filter
      </button>
    </div>
  );
};

export default Filter;
