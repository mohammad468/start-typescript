import React from 'react';

interface myProps {
    name: string;
    family: string;
    age: number;
    id:number;
}

function Greet(props: myProps) {
  return (
    <div>
      <div className="">
        <h1>{props.name}</h1>
        <h1>{props.family}</h1>
        <h2>{props.age}</h2>
        <p>{props.id}</p>
      </div>
    </div>
  );
}

export default Greet;
