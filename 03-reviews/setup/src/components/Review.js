import React from "react";

const Review = ({ id, name, job, image, text, filterPerson }) => {
  console.log(id);
  return (
    <article className="cardWrapper">
      <div className="imageWrapper">
        <img src={image} alt={name} />
      </div>
      <p className="userName">{name}</p>
      <p className="userJob">{job}</p>
      <p className="userText">{text}</p>

      <div className="prevNextWrapper">
        <span
          className="previousUser"
          onClick={() => filterPerson(id, "lessThan")}
        >
          {"<"}
        </span>
        <span
          className="nextUser"
          onClick={() => filterPerson(id, "greaterThan")}
        >
          {">"}
        </span>
      </div>
      <button className="surpriseBtn">Surprise Me</button>
    </article>
  );
};

export default Review;
