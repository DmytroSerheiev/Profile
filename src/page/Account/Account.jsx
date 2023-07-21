// Movie.jsx
import React from "react";
import { Outlet } from "react-router-dom";

import { Container } from "./Account.styled";

const Account = () => {
  return (
    <Container>
      <h1>My Account</h1>

      <Outlet />
    </Container>
  );
};

export default Account;
