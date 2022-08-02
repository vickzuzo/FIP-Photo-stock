import styled from "styled-components";

export const StyledToggleButton = styled.button`
  position: fixed;
  bottom: 3rem;
  right: 3rem;
  border-radius: 3px;
  padding: 1rem;
  font-size: 0.6rem;
  cursor: pointer;
  transition: 0.3s ease;
  background: ${(props) => props.theme.background};
  border: 1px solid
    ${(props) =>
      props.currentTheme === "light"
        ? props.theme.yellow
        : props.theme.primary};
  & svg {
    color: ${(props) =>
      props.currentTheme === "light"
        ? props.theme.yellow
        : props.theme.primary};
  }
  :hover {
    background: ${(props) => props.theme.container};
    border-radius: 0.8rem 2px 0.8rem 2px;
  }
`;
