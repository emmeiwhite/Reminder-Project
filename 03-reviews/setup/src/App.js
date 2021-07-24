import { filter } from "async";
import React, { useState, useEffect } from "react";
import Review from "./components/Review";

import reviews from "./data";

function App() {
  const [persons, setPersons] = useState(reviews);
  const [selectedPerson, setSelectedPerson] = useState(persons[0]);

  const handleSurpriseClick = () => {
    const randomId = Math.floor(Math.random() * persons.length);
    const currentPerson = persons.filter((person) => person.id === randomId);
    setSelectedPerson(currentPerson[0]);
  };

  const filterPerson = (id, selection) => {
    console.log(id, selection);
    let currentId;
    if (selection === "lessThan") {
      if (id - 1 >= 1) {
        currentId = id - 1;
      } else {
        currentId = persons.length;
      }
    } else {
      if (id + 1 <= persons.length) {
        currentId = id + 1;
      } else {
        currentId = 1;
      }
    }

    console.log(currentId);
    const currentPerson = persons.filter((person) => person.id === currentId);
    console.log(currentPerson);
    setSelectedPerson(currentPerson[0]);
  };

  return (
    <main>
      <Review
        {...selectedPerson}
        filterPerson={filterPerson}
        handleSurpriseClick={handleSurpriseClick}
      />
    </main>
  );
}

export default App;
