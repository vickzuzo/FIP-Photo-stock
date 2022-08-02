import styled from "styled-components";

export const StyledButtonContainer = styled.button`
  text-decoration: none;
  font-size: 1rem;
  font-weight: 300;
  padding: ${(props) => (props.padding ? props.padding : "0.6rem 1rem")};
  width: ${(props) => (props.width ? props.width : "auto")};
  border-radius: 3px;
  transition: 0.3s ease;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  background: ${(props) => props.theme.primary};
  color: white;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  a {
    text-decoration: none;
    color: white;
  }
  &:hover {
    border-radius: 0.8rem 2px 0.8rem 2px;
  }
`;
