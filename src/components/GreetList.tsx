import React from "react";
import { Badge } from "react-bootstrap";

interface myListProps {
  id: number;
  name: string;
  family: string;
  age: number;
  score: number;
}

function GreetList(props: myListProps) {
  return (
    <div className="d-flex justify-content-center">
      <h1 className="mx-3 my-3 text-capitalize">{props.name}</h1>
      <h1 className="mx-3 my-3 text-capitalize">{props.family}</h1>
      <h1 className="mx-3 my-3 text-capitalize">
        age: <Badge>{props.age}</Badge>
      </h1>
      <h1 className="mx-3 my-3 text-capitalize">
        score: <Badge>{props.score}</Badge>
      </h1>
    </div>
  );
}

export default GreetList;
