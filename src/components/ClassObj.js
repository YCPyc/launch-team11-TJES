import React from "react";
import { Card, Grid } from "@mui/material";
import { Link } from "react-router-dom";

export default function ClassObj({ info }) {
  const l = info.Teacher._key.path.segments.length;
  //console.log(info);

  return (
    <div>
      <Card
        variant="contained"
        style={{
          height: "100px",
          marginBottom: "10px",
        }}
      >
        <div className="class info">
          <p
            style={{
              textAlign: "left",
              marginLeft: "20px",
              marginBottom: "0px",
              fontSize: "medium",
            }}
          >
            {info.Subject}
          </p>
          <h5 style={{ marginBottom: "10px" }}>
            <Link to={info.ClassName}>{info.ClassName}</Link>{" "}
          </h5>
        </div>
        <div className="teacher name">
          <h6 style={{ paddingBottom: "25px" }}>
            {info.Teacher._key.path.segments[l - 1]}
          </h6>
        </div>
      </Card>
    </div>
  );
}
