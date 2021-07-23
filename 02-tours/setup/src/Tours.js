import React from "react";
import Tour from "./Tour";
const Tours = ({ tours, handleDelete, fetchData }) => {
  return (
    <main className="toursWrapper">
      <h1 className="heading">
        {tours.length > 0 ? "Our Tours" : "See Tours"}
      </h1>
      {tours.length <= 0 ? (
        <button className="showToursAgain" onClick={fetchData}>
          Show Tours Again
        </button>
      ) : (
        ""
      )}
      {tours.map((tour) => {
        return <Tour {...tour} key={tour.id} handleDelete={handleDelete} />;
      })}
    </main>
  );
};

export default Tours;
