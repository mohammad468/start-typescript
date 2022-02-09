import React, { ChangeEvent } from "react";
import { FormControl } from "react-bootstrap";

interface inputProps {
  value: string | number;
  changeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function InputComponent(props: inputProps) {
  const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
  };
  return (
    <div>
      <FormControl value={props.value} onChange={props.changeHandler} />
    </div>
  );
}

export default InputComponent;
