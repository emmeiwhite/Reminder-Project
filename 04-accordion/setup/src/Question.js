import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Question = ({ id, title, info }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <article className="questionWrapper">
      <div className="mainTitle">
        <h4>{title}</h4>
        {isOpen ? <AiOutlineMinus /> : <AiOutlinePlus />}
      </div>
      {isOpen && <p>{info}</p>}
    </article>
  );
};

export default Question;
