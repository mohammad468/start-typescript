import React from "react";
import GreetList from "./GreetList";

interface myProps {
  name: string;
  family: string;
  age: number;
  id: number;
}

function Greet(props: myProps) {
  const myStudents = [
    {
      id: 1,
      name: "mohammad",
      family: "mohseni",
      age: 22,
      score: 20,
    },
    {
      id: 2,
      name: "ali",
      family: "shisheh",
      age: 21,
      score: 10,
    },
    {
      id: 3,
      name: "hossein",
      family: "sabzeali",
      age: 18,
      score: 12,
    },
  ];

  return (
    <div>
      <div className="">
        <h1>{props.name}</h1>
        <h1>{props.family}</h1>
        <h2>{props.age}</h2>
        <p>{props.id}</p>
      </div>
      <GreetList students={myStudents} />
    </div>
  );
}

export default Greet;
