import React, { useState } from "react";
import { Badge, Button } from "react-bootstrap";

interface authUser {
  name: string;
  family: string;
}

const User = () => {
  const [user, setUser] = useState<authUser | null>(null);

  let myUserName: string | authUser;
  let myUserNameStyle: string;

  if (user === null) {
    myUserName = "user name is null";
  } else {
    myUserName = `hello ${user.name} ${user.family}`;
  }
  if (user === null) {
    myUserNameStyle = "danger";
  } else {
    myUserNameStyle = "success";
  }

  const loginHandler = () => {
    setUser({
      name: "mohammad",
      family: "mohseni",
    });
  };

  const logoutHandler = () => {
    setUser(null);
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
          <Badge bg={myUserNameStyle}>{myUserName}</Badge>
        </h1>
      </div>
    </div>
  );
};

export default User;
