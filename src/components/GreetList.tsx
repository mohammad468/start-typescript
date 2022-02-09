import React from "react";
import { Badge } from "react-bootstrap";

interface myListProps {
  students: {
    id: number;
    name: string;
    family: string;
    age: number;
    score: number;
  }[];
}

function GreetList(props: myListProps) {
  return (
    <div>
      {props.students.map((student) => (
        <div className="d-flex justify-content-start" key={student.id}>
          <h1 className="mx-2 my-2">
            {student.name} {student.family}{" "}
          </h1>
          <h2 className="mx-2 my-2">
            <Badge>{student.age}</Badge>
          </h2>
          <h2 className="mx-2 my-2">
            <Badge>{student.score}</Badge>
          </h2>
        </div>
      ))}
    </div>
  );
}

export default GreetList;
