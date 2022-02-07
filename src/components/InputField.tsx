import React from "react";
import { Col, Form } from "react-bootstrap";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
}

const InputField: React.FC<Props> = ({ todo, setTodo }) => {
  return (
    <Col xxl="4" xl="4" lg="4" md="6" sm="10" xs="10">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email Text For Search</Form.Label>
          <Form.Control
            value={todo}
            onChange={(event) => setTodo(event.target.value)}
            type="text"
            placeholder="Search"
          />
        </Form.Group>
      </Form>
    </Col>
  );
};

export default InputField;
