import React, { useEffect, useState } from "react";
import "./Tour.css";

const Tour = ({ id, name, info, image, price, handleDelete }) => {
  const [hideInfo, setHideInfo] = useState(true);
  return (
    <div className="tourCard">
      <div className="imgWrapper">
        <img src={image} alt={name} />
      </div>

      <div className="tourDetails">
        <div className="tourPriceName">
          <h4>{name}</h4>
          <span className="tourPrice">$ {price}</span>
        </div>

        <div className="infoWrapper">
          <p className="tourInfo">
            {hideInfo ? `${info.substring(0, 230)} ...` : `${info} `}
            {hideInfo ? (
              <span onClick={() => setHideInfo(!hideInfo)}>Read More</span>
            ) : (
              <button
                className="showLess"
                onClick={() => setHideInfo(!hideInfo)}
              >
                Show Less
              </button>
            )}
          </p>
        </div>

        <button onClick={() => handleDelete(id)}> Not Interested</button>
      </div>
    </div>
  );
};

export default Tour;
