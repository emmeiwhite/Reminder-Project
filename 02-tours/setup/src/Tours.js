import React from "react";
import Tour from "./Tour";
const Tours = ({ tours, handleDelete }) => {
  return (
    <main className="toursWrapper">
      <h1 className="heading">{tours.length > 0 ? "Our Tours" : "Refresh"}</h1>
      {tours.length <= 0 ? <button>Show Tours Again</button> : ""}
      {tours.map((tour) => {
        return <Tour {...tour} key={tour.id} handleDelete={handleDelete} />;
      })}
    </main>
  );
};

export default Tours;
