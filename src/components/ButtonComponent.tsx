import React from "react";
import { Button } from "react-bootstrap";

interface ButtonComponentProps {
  clickHandler: (
    event: React.MouseEvent<HTMLButtonElement>,
    id: number
  ) => void;
}

function ButtonComponent(props: ButtonComponentProps) {
  return (
    <div>
      <Button onClick={(event) => props.clickHandler(event, 1)}>
        Click my to add
      </Button>
    </div>
  );
}

export default ButtonComponent;
