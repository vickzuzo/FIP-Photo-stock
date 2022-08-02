import styled from "styled-components";

export const TabContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 1.5rem 0px;
  justify-content: center;
  border-bottom: 1px solid #e6e6e6;
`;

export const Tab = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.3rem 1.2rem;
  font-weight: ${(props) => (props.active ? "bold" : "normal")};
  color: ${(props) => (props.active ? props.theme.primary : "#999")};
  border-bottom: ${(props) =>
    props.active === true ? `2px solid ${props.theme.primary}` : "none"};
  margin-bottom: -1.6rem;
  cursor: pointer;
  text-transform: capitalize;
`;
