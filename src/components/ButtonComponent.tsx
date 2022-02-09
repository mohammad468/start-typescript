import React from "react";
import { Button } from "react-bootstrap";

interface ButtonComponentProps {
    clickHandler:() => void;
}

function ButtonComponent(props: ButtonComponentProps) {
  return (
    <div>
      <Button onClick={props.clickHandler}>Click my to add</Button>
    </div>
  );
}

export default ButtonComponent;
