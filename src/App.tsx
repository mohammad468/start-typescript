import React, { useState } from "react";
import { Badge } from "react-bootstrap";
import "./App.scss";

// ?components
import InputField from "./components/InputField";
import { Todo } from "./model";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (event) => {
    event.preventDefault();
  }

  console.log(todo);

  return (
    <div>
      <div className="d-flex justify-content-center">
        <h1>HelloWorld</h1>
      </div>
      <div className="d-flex justify-content-center">
        <InputField todo={todo} setTodo={setTodo} />
      </div>
    </div>
  );
};

export default App;
