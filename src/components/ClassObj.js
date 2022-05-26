import React from "react";
import { Card, Grid } from "@mui/material";
import { Link } from "react-router-dom";

export default function ClassObj({ info }) {
  const l = info.Teacher._key.path.segments.length;
  console.log(info);

  return (
    <div>
      <Grid container direction="row" spacing={0.5}>
        <Grid item xs={6} direction="row" align-items="center" justify="center">
          <Card
            variant="contained"
            style={{
              height: "75px",
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
              <h4 style={{ paddingBottom: "20px" }}>
                <Link to={info.ClassName}>{info.ClassName}</Link>{" "}
              </h4>
            </div>
          </Card>
        </Grid>
        <Grid item xs={6} direction="row" align-items="center" justify="center">
          <Card
            variant="contained"
            style={{
              height: "75px",
              marginBottom: "10px",
            }}
          >
            <div className="teacher name">
              <h4 style={{ padding: "25px" }}>
                {info.Teacher._key.path.segments[l - 1]}
              </h4>
            </div>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
