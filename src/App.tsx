import React, { useState } from "react";
import { Badge } from "react-bootstrap";
import "./App.scss";

// ?components
import InputField from "./components/InputField";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string | number>();

  return (
    <div>
      <div className="d-flex justify-content-center">
        <h1>HelloWorld</h1>
      </div>
      <div className="d-flex justify-content-center">
        <InputField />
      </div>
      <div className="d-flex justify-content-center"></div>
    </div>
  );
};

export default App;
