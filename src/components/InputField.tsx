import React, { useRef } from "react";
import { Button, Col, Form } from "react-bootstrap";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (event: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {

  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <Col xxl="4" xl="4" lg="4" md="6" sm="10" xs="10">
      <Form
        onSubmit={(event) => {
          handleAdd(event);
          inputRef.current?.blur();
        }}
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email Text For Search</Form.Label>
          <Form.Control
            value={todo}
            onChange={(event) => setTodo(event.target.value)}
            type="text"
            placeholder="Search"
            ref={inputRef}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Col>
  );
};

export default InputField;
