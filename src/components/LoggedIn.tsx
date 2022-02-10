import React, { useState } from "react";
import { Badge, Button } from "react-bootstrap";

const LoggedIn = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginHandler = () => {
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
  };

  return (
    <div>
      <div className="d-flex justify-content-center my-2">
        <Button onClick={loginHandler}>Login</Button>
      </div>
      <div className="d-flex justify-content-center my-2">
        <Button onClick={logoutHandler}>LogOut</Button>
      </div>
      <div className="d-flex justify-content-center my-2">
        <h1>
          {isLoggedIn ? (
            <Badge bg="success">logged In</Badge>
          ) : (
            <Badge bg="danger">Logged Out</Badge>
          )}
        </h1>
      </div>
    </div>
  );
};

export default LoggedIn;
