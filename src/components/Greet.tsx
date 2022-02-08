import React from "react";

interface GreetProps {
  name: string;
}

function Greet(props: GreetProps) {
  return (
    <div>
      <div className="d-flex justify-content-center my-2">
        <h1>{props.name}</h1>
      </div>
    </div>
  );
}

export default Greet;
