import styled from "styled-components";

export const StyledFlexiBullContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-top: 7rem;
`;

export const StyledDistributionContainer = styled.div`
  margin: 3rem 0;
`;

export const StyledDemoModalContainer = styled.div`
  background: ${props => props.theme.container};
  padding: 2rem;
  border-radius: 0.5rem;
  z-index: 1001;
  width: 40%;
  position: relative;
`;

export const ModalTitle = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
  border-bottom: 1px solid ${(props) => props.theme.background};
`;

export const ModalCloseButton = styled.button`
  background: none;
  border: none;
  position: absolute;
  top: 1rem;
  right: 1rem;
  color: ${(props) => props.theme.text};
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  margin-bottom: 1rem;
  transition: 0.4s ease;
  :hover {
    cursor: pointer;
    color: ${(props) => props.theme.red};
  }
`;

export const ModalBody = styled.div`
  padding: 1rem;
  border-radius: 0.5rem;
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  font-size: 0.8rem;
`;
