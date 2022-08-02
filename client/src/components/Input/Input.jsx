import React from "react";
import {
  StyledErrorText,
  StyledInputContainer,
  StyledRightElement,
} from "./styles";

const Input = ({
  label,
  display,
  value,
  name,
  placeholder,
  type,
  error,
  onChange,
  required,
  rightElement,
  disabled,
}) => {
  return (
    <StyledInputContainer style={{ display }}>
      <label>{label}</label>
      <div className="wrapper">
        <input
          placeholder={placeholder}
          type={type}
          error={error}
          name={name}
          required={required}
          onChange={onChange}
          vaklue={value}
          disabled={disabled}
        />
        {rightElement && (
          <StyledRightElement>{rightElement}</StyledRightElement>
        )}
      </div>
      {error && <StyledErrorText>{error}</StyledErrorText>}
    </StyledInputContainer>
  );
};

export default Input;
