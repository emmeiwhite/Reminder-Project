import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Question = ({ id, title, info, handleToggle, isOpen }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <article className="questionWrapper">
      <div className="mainTitle">
        <h4>{title}</h4>
        <span onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </span>
      </div>
      {showInfo ? <p className="info">{info}</p> : ""}
    </article>
  );
};

export default Question;
