import styled from "styled-components";

export const StyledInputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
  label {
    font-size: 0.7rem;
    color: ${({ theme }) => theme.text};
    margin-bottom: 0.3rem;
    text-transform: uppercase;
  }

  div.wrapper {
    position: relative;
    width: 100%;
  }

  input {
    width: 100%;
    border: 1px solid
      ${(props) => (props.error ? props.theme.red : props.theme.primary)};
    border-radius: 0.3rem;
    padding: 0.8rem;
    font-size: 0.8rem;
    color: ${({ theme }) => theme.text};
    background: none;
  }
`;

export const StyledErrorText = styled.div`
  font-size: 0.7rem;
  color: ${({ theme }) => theme.red};
  margin-top: 0.5rem;
`;

export const StyledRightElement = styled.div`
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
`;
