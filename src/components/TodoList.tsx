import React from "react";
import { Todo } from "../model";
import "./TodoList.scss";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({ todos, setTodos }: Props) => {
  return (
    <div>
      {todos.map((res) => (
        <div key={res.id} className="d-flex justify-content-center">
          <h1>{res.todo}</h1>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
