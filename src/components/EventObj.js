import React from "react";
import { Card } from "@mui/material";

export default function EventObj({ info }) {
  console.log(info);
  return (
    <div>
      <Card variant="contained" style={{ height: "200px" }}>
        <div className="title">
          <h5>{info.id}</h5>
        </div>
        <div className="date">
          <h6>{info.date.toDate().toDateString()}</h6>
        </div>
        <div className="description">
          <p>{info.description}</p>
        </div>
      </Card>
    </div>
  );
}
