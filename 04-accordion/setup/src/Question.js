import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Question = ({ id, title, info, handleToggle, isOpen }) => {
  return (
    <article className="questionWrapper">
      <div className="mainTitle">
        <h4>{title}</h4>
        {isOpen ? (
          <span onClick={() => handleToggle(id)}>
            <AiOutlineMinus />
          </span>
        ) : (
          <span>
            <AiOutlinePlus onClick={() => handleToggle(id)} />
          </span>
        )}
      </div>
      {isOpen ? <p className="info">{info}</p> : ""}
    </article>
  );
};

export default Question;
