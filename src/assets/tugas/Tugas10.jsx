import React, { useEffect, useState } from "react";
import axios from "axios";
import Home from "../pages/Home";

const Tugas10 = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("https://backendexample.sanbercloud.com/api/student-scores")
      .then((res) => {
        setData([...res.data]);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []); // empty dependency array to run useEffect only once

  return (
    <>
      <ul>
        {data !== null &&
          data.map((res) => {
            return <li key={res.id}>{res.name}</li>; // Assuming 'id' is a unique key for each item
          })}
      </ul>
    </>
  );
};

export default Tugas10;
