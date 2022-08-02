import React from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Button, Input } from "../components";
import {
  StyledForgotPassword,
  StyledFormHeader,
  StyledLoginForm,
  StyledNavigateContainer,
} from "../components/AuthLayout";
// import { Button } from "flexibull2/build/button";
import { Link } from "react-router-dom";
import { useLogin } from "./helpers/useLogin";

const LoginScreen = () => {
  const {
    show,
    handleShowToggle,
    onSubmit,
    handleFieldChange,
    errors,
    fields,
    isDisabled,
    isLoading,
  } = useLogin();

  return (
    <StyledLoginForm>
      <StyledFormHeader>Login to your account</StyledFormHeader>
      <Input
        type="email"
        required={true}
        label="Email"
        onChange={handleFieldChange}
        value={fields.email}
        name="email"
        placeholder="Enter your email address"
        error={errors.email}
      />
      <Input
        type={show ? "text" : "password"}
        required={true}
        label="Password"
        name="password"
        onChange={handleFieldChange}
        value={fields.password}
        placeholder="Enter your Password"
        error={errors.password}
        rightElement={
          !show ? (
            <AiOutlineEye
              style={{ cursor: "pointer" }}
              onClick={() => handleShowToggle()}
            />
          ) : (
            <AiOutlineEyeInvisible
              style={{ cursor: "pointer" }}
              onClick={() => handleShowToggle()}
            />
          )
        }
      />
      <StyledForgotPassword>Forgot Password?</StyledForgotPassword>

      <Button
        padding="1.3rem"
        width="70%"
        disabled={isDisabled}
        isLoading={isLoading}
        onClick={onSubmit}
      >
        LOGIN
      </Button>
      <StyledNavigateContainer>
        <p>Don't have an account, </p>
        <Link to="/auth/register" className="navigate_link">
          Create One
        </Link>
      </StyledNavigateContainer>
    </StyledLoginForm>
  );
};

export default LoginScreen;
