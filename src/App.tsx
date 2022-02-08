import React from "react";
import "./App.scss";

// ?components
import Greet from "./components/Greet";

const App: React.FC = () => {

  return (
    <div>
      <div className="d-flex justify-content-center my-2">
        <h1>HelloWorld</h1>
      </div>
      <div className="d-flex justify-content-center my-2">
        <Greet name="mohammad" />
      </div>
    </div>
  );
};

export default App;
