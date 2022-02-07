import React from "react";
import "./App.scss";
import MyComponents from "./components/MyComponents";

function App() {
  return (
    <div>
      <div className="d-flex justify-content-center">
        <h1>HelloWorld</h1>
      </div>
      <div className="d-flex justify-content-center">
        <MyComponents />
      </div>
    </div>
  );
}

export default App;
