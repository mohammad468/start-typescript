import React from "react";
import { Badge } from "react-bootstrap";

interface StatusProps {
  status: "loading" | "error" | "success";
}

const Status = (props: StatusProps) => {
  let message;
  if (props.status === "loading") {
    message = "loading...";
  } else if (props.status === "success") {
    message = "Data fetched successfully";
  } else if (props.status === "error") {
    message = "Error fetching Data";
  }

  let myStyle;
  if (props.status === "loading") {
    myStyle = "info";
  } else if (props.status === "success") {
    myStyle = "success";
  } else if (props.status === "error") {
    myStyle = "danger";
  }

  return (
    <div>
      <h1>
        <Badge bg={myStyle}>{message}</Badge>
      </h1>
    </div>
  );
};

export default Status;
