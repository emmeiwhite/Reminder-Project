import React from "react";

const List = ({ name, age, image }) => {
  return (
    <>
      <section className="person">
        <div>
          <img src={image} alt={`${age} years`} />
        </div>

        <div>
          <h4>{name}</h4>
          <p>{age} Years</p>
        </div>
      </section>
    </>
  );
};

export default List;
