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

  const handleDelete = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setIsLoading(false);
      setTours(data);
    } catch (e) {
      setIsError(true);
    }
  };

  // useEffect(() => {
  //   fetch(url)
  //     .then((response) => {
  //       console.log(response);
  //       if (response.status >= 200 && response.status < 299) {
  //         return response.json();
  //       } else {
  //         setIsError(true);
  //       }
  //     })
  //     .then((data) => {
  //       console.log("My Data is:");
  //       console.log(data);
  //       setIsLoading(false);
  //       setTours(data);
  //     });
  // }, []);

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <h1>ERROR !!!</h1>;
  }

  return (
    <Tours tours={tours} handleDelete={handleDelete} fetchData={fetchData} />
  );
}

export default App;
