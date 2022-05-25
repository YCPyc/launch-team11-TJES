import React from "react";
import { Card, Grid } from "@mui/material";
import { Link } from "react-router-dom";
// import { Card } from "react-bootstrap";

export default function ClassObj({ info }) {
  const l = info.Teacher._key.path.segments.length;
  console.log(info);

  return (
    <div>
      <Grid container spacing={0.5}>
        <Grid item xs={6}>
          <Card style={{ height: "100px", marginBottom: "20px" }}>
            <p style={{ textAlign: "left", marginLeft: "10px" }}>
              {info.Subject}
            </p>
            <h4>
              <Link to={info.ClassName}>{info.ClassName}</Link>{" "}
            </h4>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card style={{ height: "100px", marginBottom: "20px" }}>
            <h4 style={{ padding: "35px" }}>
              {info.Teacher._key.path.segments[l - 1]}
            </h4>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
