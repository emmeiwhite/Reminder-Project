import React, { useState } from "react";
import data from "./data";
import SingleQuestion from "./Question";

function App() {
  const [questions, setQuestions] = useState(data);
  return (
    <main className="mainWrapper">
      <div className="questionAnswerHeading">
        <h2>Questions and Answers About Login</h2>
      </div>

      <div className="mainQuestionsWrapper">
        {questions.map((question) => {
          return <SingleQuestion {...question} />;
        })}
      </div>
    </main>
  );
}

export default App;
