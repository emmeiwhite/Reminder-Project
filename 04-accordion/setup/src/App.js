import React, { useState } from "react";
import data from "./data";
import SingleQuestion from "./Question";

function App() {
  const [questions, setQuestions] = useState(data);

  const handleToggle = (id) => {
    console.log("Handler Clicked !!!", id);
    const updatedPersons = questions.map((question) => {
      if (question.id !== id) {
        return question;
      } else {
        question.isOpen = !question.isOpen;
        return question;
      }
    });

    console.log(updatedPersons);
    setQuestions(updatedPersons);
  };
  return (
    <main className="mainWrapper">
      <div className="questionAnswerHeading">
        <h2>Questions and Answers About Login</h2>
      </div>

      <div className="mainQuestionsWrapper">
        {questions.map((question) => {
          return (
            <SingleQuestion
              {...question}
              key={question.id}
              handleToggle={handleToggle}
            />
          );
        })}
      </div>
    </main>
  );
}

export default App;
