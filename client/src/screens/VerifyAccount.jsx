import React from "react";
import { Button, Input } from "../components";
import { StyledFormHeader, StyledLoginForm } from "../components/AuthLayout";
// import { Button } from "flexibull2/build/button";
import { useVerifyAccount } from "./helpers/useVerifyAccount";

const VerifyAccount = () => {
  const { onSubmit, handleFieldChange, errors, fields, isDisabled, isLoading } =
    useVerifyAccount();

  return (
    <StyledLoginForm>
      <StyledFormHeader>Verify your account</StyledFormHeader>

      <Input
        type="text"
        required={true}
        label="code"
        name="code"
        onChange={handleFieldChange}
        value={fields.code}
        placeholder="Enter your code"
        error={errors.code}
      />

      <Button
        padding="1.3rem"
        width="70%"
        disabled={isDisabled}
        isLoading={isLoading}
        onClick={onSubmit}
      >
        VERIFY
      </Button>
      {/* <StyledNavigateContainer>
        <p>Don't have an account, </p>
        <Link to="/auth/register" className="navigate_link">
          Create One
        </Link>
      </StyledNavigateContainer> */}
    </StyledLoginForm>
  );
};

export default VerifyAccount;
