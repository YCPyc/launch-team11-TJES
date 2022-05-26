import React from "react";
//import { Card } from "@mui/material";
import { Card } from "react-bootstrap";

export default function EventObj({ info }) {
  console.log(info);
  return (
    <div>
<<<<<<< HEAD
      <Card border="dark" key={info.id}>
        <Card.Body>
          <Card.Title>{info.id}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {info.date.toDate().toDateString()}
          </Card.Subtitle>
          <Card.Text>{info.description}</Card.Text>
        </Card.Body>
=======
      <Card variant="contained" style={{ height: "150px" }}>
        <div className="title">
          <h5>{info.id}</h5>
        </div>
        <div className="date">
          <h6>{info.date.toDate().toDateString()}</h6>
        </div>
        <div className="description">
          <p>{info.description}</p>
        </div>
>>>>>>> fb75feca68474115e52bc3dd5b077916b647c555
      </Card>

      {/* <Card border="dark">
        <Card.Title>
          <div className="title">
            <h5>{info.id}</h5>
          </div>
        </Card.Title>
        <Card.Subtitle>
          <div className="date">
            <h6>{info.date.toDate().toDateString()}</h6>
          </div>
        </Card.Subtitle>
        <Card.Text>
          <div className="description">
            <p>{info.description}</p>
          </div>
        </Card.Text>
      </Card> */}
    </div>
  );
}
