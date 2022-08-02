import React from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Button, Input } from "../components";
import {
  StyledFormHeader,
  StyledLoginForm,
  StyledNavigateContainer,
} from "../components/AuthLayout";
import { useCreateUser } from "./helpers/useCreateUser";

const RegisterScreen = () => {
  const {
    show,
    handleShowToggle,
    onSubmit,
    handleFieldChange,
    isLoading,
    isDisabled,
    errors,
    fields,
  } = useCreateUser();
  return (
    <StyledLoginForm>
      <StyledFormHeader>Create an account</StyledFormHeader>
      <Input
        type="text"
        required={true}
        label="User Name"
        name="username"
        value={fields.username}
        onChange={handleFieldChange}
        placeholder="Enter your username"
        error={errors.username}
      />
      <Input
        type="email"
        required={true}
        label="Email"
        name="email"
        value={fields.email}
        onChange={handleFieldChange}
        placeholder="Enter your email address"
        error={errors.email}
      />
      <Input
        type={show ? "text" : "password"}
        required={true}
        label="Password"
        placeholder="Enter your Password"
        error={errors.password}
        name="password"
        value={fields.password}
        onChange={handleFieldChange}
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
      <Button
        padding="1.3rem"
        width="70%"
        disabled={isDisabled}
        isLoading={isLoading}
        onClick={onSubmit}
      >
        CREATE ACCOUNT
      </Button>
      <StyledNavigateContainer>
        <p>Already have an account, </p>
        <Link to="/auth/login" className="navigate_link">
          Login
        </Link>
      </StyledNavigateContainer>
    </StyledLoginForm>
  );
};

export default RegisterScreen;
