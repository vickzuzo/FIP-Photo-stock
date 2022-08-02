import styled from "styled-components";

export const StyledAdminPageHeader = styled.div`
  width: 100%;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background-color: ${(props) => props.theme.container};

  div.content {
    width: 40%;
  }
  p {
    font-size: 3rem;
    color: ${(props) => props.theme.primary};
    @media screen and (max-width: 65rem) {
      font-size: 1rem;
    }
  }

  .input_wrapper {
    display: flex;
    align-items: center;
    button {
      margin-left: 1rem;
      margin-bottom: 0;
    }
  }

  @media screen and (max-width: 65rem) {
    padding: 1rem;
  }
`;
