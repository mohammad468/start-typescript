import React from "react";
import { Badge } from "react-bootstrap";
import "./App.scss";
import MyComponents from "./components/MyComponents";

// !variables and types

let name: string;
let age: number;
let isStudent: boolean;
let hobbies: string[];
let role: [number, string];

// !object and types

type MyPerson = {
  name: string;
  age: number;
  isTeacher: boolean;
};

const person: MyPerson = {
  name: "mohammad",
  age: 22,
  isTeacher: true,
};

// !functions and types

function printName(name: string) {
  console.log(name);
}

const printFamily = (family: string) => {
  console.log(family);
};

let printAge = (myAge: number) => {
  console.log(myAge * 2);
};

printName("mohammad");
printFamily("mohseni");
printAge(22);

const App:React.FC = () => {
  return (
    <div>
      <div className="d-flex justify-content-center">
        <h1>HelloWorld</h1>
      </div>
      <div className="d-flex justify-content-center">
        <MyComponents />
      </div>
      <div className="d-flex justify-content-center">
        <span>{person.name}</span>
        <span>
          <Badge>{person.age}</Badge>
        </span>
        {person.isTeacher ? (
          <span> is Teacher </span>
        ) : (
          <span> is not Teacher </span>
        )}
      </div>
    </div>
  );
}

export default App;
