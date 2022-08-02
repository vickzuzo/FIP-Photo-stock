import React from "react";
import { Outlet } from "react-router-dom";
import { StyledAuthLayout } from "./styles";

const AuthLayout = () => {
  return (
    <StyledAuthLayout>
      <Outlet />
    </StyledAuthLayout>
  );
};

export default AuthLayout;
