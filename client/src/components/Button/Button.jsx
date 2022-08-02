import React from "react";
import { Loader } from "../Loader";
import { StyledButtonContainer } from "./styles";

const Button = ({
  children,
  width,
  padding,
  isLoading,
  onClick,
  disabled,
  className,
}) => {
  return (
    <StyledButtonContainer
      className={className}
      width={width}
      padding={padding}
      isLoading={isLoading}
      disabled={disabled}
      onClick={onClick}
    >
      {isLoading ? <Loader /> : children}
    </StyledButtonContainer>
  );
};

export default Button;
