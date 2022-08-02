import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  position: relative;
`;

export const StyledSidebarContainer = styled.div`
  position: fixed;
  width: 270px;
  background: ${(props) => props.theme.container};
  height: 100%;
  left: 0;
  top: 0;
  .logo {
    font-size: 1.5rem;
    font-weight: bold;
    text-align: center;
    margin-top: 2rem;
    color: ${(props) => props.theme.primary};
  }
`;

export const StyledContent = styled.div`
  width: 100%;
  margin-left: 270px;
  padding: 1.8rem;
`;

export const StyledNavContainer = styled.div`
  width: 100%;
  margin-top: 7rem;
`;

export const StylednavItem = styled(Link)`
  color: white;
  margin: 0.6rem;
  padding: 1rem;
  color: ${(props) => (props.isActive ? "white" : props.theme.text)};
  text-decoration: none;
  display: flex;
  align-items: center;
  transition: 0.4s ease;
  border-radius: ${(props) => (props.isActive ? "4px" : "0px")};
  background: ${(props) =>
    props.isActive ? "rgba(251, 133, 0, 1)" : "transparent"};
  p {
    margin-left: 1rem;
  }
  :hover {
    border-radius: ${(props) =>
      props.isActive ? "6px" : "0.8rem 2px 0.8rem 2px"};
    background: ${(props) =>
      props.isActive ? "rgba(251, 133, 0, 1)" : "rgba(251, 133, 0, 0.6)"};
  }
`;

export const StyledLogoutButton = styled.div`
  color: white;
  margin: 0.6rem;
  padding: 1rem;
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  display: flex;
  align-items: center;
  transition: 0.4s ease;
  border-radius: "4px";
  background: transparent;
  cursor: pointer;
  p {
    margin-left: 1rem;
  }
  :hover {
    border-radius: 0.8rem 2px 0.8rem 2px;
    background: ${(props) => props.theme.red};
    color: white;
  }
`;
