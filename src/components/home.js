
import React, { useState, useEffect } from "react";
import { collection, getDocs, Timestamp } from "firebase/firestore";
import ClassObj from "./ClassObj";
import EventObj from "./EventObj";
import { Grid } from "@mui/material";

function Home({ db }) {
  const [data, setData] = useState([]);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const classes = [];
    getDocs(collection(db, "Class")).then((allResponses) => {
      allResponses.forEach((c) => classes.push({ id: c.id, ...c.data() }));
      setData(classes);
    });
    const evt = [];
    const now = Timestamp.now();
    getDocs(collection(db, "Calendar")).then((allResponses) => {
      allResponses.forEach((c) => (c.data().date>now) ? evt.push({ id: c.id, ...c.data() }) : null);
      console.log(evt);
      evt.sort((a, b) => (a.date>now && b.date>now && a.date > b.date ? 1 : -1));
      setEvents(evt);
    });
  }, [db]);



  return (
    <>
      <div className="title">
        <h1 className="display" style={{ fontSize: "60px" }}>
          Thomas Jefferson Elementary School
        </h1>
        <h2
          className="display"
          style={{ marginBottom: "50px", fontSize: "30px" }}
        >
          ~Dashboard~
        </h2>
      </div>
      <div className="calendar">
        <h3>Upcoming Events</h3>
        {events && (
          <Grid container spacing={2} style={{ paddingBottom: "80px" }}>
            {events.map((ev, idx) => {
              console.log(events);
              if (idx < 2) {
                return (
                  <Grid item xs={6}>
                    <EventObj info={ev} />
                  </Grid>
                );
              }
            })}
          </Grid>
        )}
      </div>
      <div className="classes">
        <h3>Classes</h3>
        {data && (
          <Grid container spacing={0.5}>
            {" "}
            {""}
            {data.map((cl) => (
              <Grid item xs={6}>
                <ClassObj info={cl} />
              </Grid>
            ))}{" "}
            {""}
          </Grid>
        )}
      </div>
    </>
  );

}

export default Home;
