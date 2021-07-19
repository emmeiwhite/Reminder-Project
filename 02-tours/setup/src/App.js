import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tours-project";

function App() {
  const [tours, setTours] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false);
        setTours(data);
      });
  }, [tours]);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <h1>ERROR !!!</h1>;
  }

  return <Tours />;
}

export default App;
