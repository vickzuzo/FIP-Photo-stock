import styled from "styled-components";

export const StyledAuthLayout = styled.div`
  width: 100%;
  height: 100vh;
  background: ${(props) => props.theme.background};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledLoginForm = styled.div`
  width: 40%;
  background: ${(props) => props.theme.container};
  border-radius: 0.6rem;
  margin: 0 auto;
  padding: 2rem 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StyledFormHeader = styled.div`
  font-size: 1.5rem;
  color: ${(props) => props.theme.text};
  margin-bottom: 2rem;
  font-weight: 600;
  text-transform: uppercase;
`;

export const StyledForgotPassword = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: ${(props) => props.theme.text};
  font-size: 0.8rem;
  width: 100%;
  cursor: pointer;
  transition: 0.4s ease;
  margin: 0.5rem 0 1rem 0;
  :hover {
    color: ${(props) => props.theme.primary};
  }
`;

export const StyledNavigateContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 2rem;
  color: ${(props) => props.theme.text};
  .navigate_link {
    margin-left: 0.5rem;
    color: ${(props) => props.theme.primary};
    opacity: 0.7;
    transition: 0.4s ease;
    cursor: pointer;
    :hover {
      opacity: 1;
    }
  }
`;
