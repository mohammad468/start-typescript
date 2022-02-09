import React from "react";
import "./App.scss";
import ButtonComponent from "./components/ButtonComponent";

// ?components
import Greet from "./components/Greet";

const App: React.FC = () => {
  const myData = {
    name: "mohammad",
    family: "mohseni",
    age: 22,
    id: 1,
  };

  return (
    <div>
      <div className="d-flex justify-content-center my-2">
        <h1>HelloWorld</h1>
      </div>
      <div className="d-flex justify-content-center my-2">
        <Greet
          name={myData.name}
          family={myData.family}
          age={myData.age}
          id={myData.id}
        />
      </div>
      <div className="d-flex justify-content-center my-2">
        <ButtonComponent
          clickHandler={() => {
            console.log("button clicked");
          }}
        />
      </div>
    </div>
  );
};

export default App;
