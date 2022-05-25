import React from "react";
import { Card } from "@mui/material";
import { Link } from "react-router-dom";
// import { Card } from "react-bootstrap";

export default function ClassObj({ info }) {
  const l = info.Teacher._key.path.segments.length;
  console.log(info);

  return (
    <div>
      <Card>
        <p>{info.Subject}</p>
        <h4>
          <Link to={info.ClassName}>{info.ClassName}</Link>{" "}
          {info.Teacher._key.path.segments[l - 1]}
        </h4>
      </Card>
    </div>
  );
}
