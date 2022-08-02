import styled, { keyframes } from "styled-components";

const spin = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

export const StyledLoaderContainer = styled.div`
  border: 0.3rem solid rgba(0, 0, 0, 0.1);
  border-top: 0.3rem solid ${(props) => props.theme.primary};
  border-radius: 50%;
  width: 1.8rem;
  height: 1.8rem;
  animation: ${spin} 0.6s linear infinite;
`;
