import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import ClassObj from "./ClassObj";
import { Grid } from "@mui/material";

function Home({ db }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const classes = [];
    getDocs(collection(db, "Class")).then((allResponses) => {
      allResponses.forEach((c) => classes.push({ id: c.id, ...c.data() }));
      setData(classes);
    });
  }, [db]);

  const retreivesentences = () => {
    getDocs(collection(db, "Class")).then((allDocs) => {
      allDocs.forEach((doc) => console.log(doc.data()));
    });
  };

  return (
    <>
      {retreivesentences()}
      <h1 className="display" style={{ fontSize: "60px" }}>
        Thomas Jefferson Elementary School
      </h1>
      <h2
        className="display"
        style={{ marginBottom: "50px", fontSize: "30px" }}
      >
        ~Dashboard~
      </h2>
      <h3>Classes</h3>
      {data && data.map((cl) => <ClassObj info={cl} />)}
    </>
  );
}

export default Home;
