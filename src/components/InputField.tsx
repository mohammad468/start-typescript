import React from "react";
import { Button, Col, Form } from "react-bootstrap";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: () => void;
}

const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
  return (
    <Col xxl="4" xl="4" lg="4" md="6" sm="10" xs="10">
      <Form onSubmit={handleAdd}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email Text For Search</Form.Label>
          <Form.Control
            value={todo}
            onChange={(event) => setTodo(event.target.value)}
            type="text"
            placeholder="Search"
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
