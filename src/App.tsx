import React from "react";
import "./App.scss";
import ButtonComponent from "./components/ButtonComponent";

// ?components
import Greet from "./components/Greet";
import InputComponent from "./components/InputComponent";
import LoggedIn from "./components/LoggedIn";
import User from "./components/User";

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
        <InputComponent
          value=""
          changeHandler={(event) => console.log(event)}
        />
        <ButtonComponent
          clickHandler={(event, id) => {
            console.log("button clicked", event, id);
          }}
        />
      </div>
      <LoggedIn />
      <User />
    </div>
  );
};

export default App;
