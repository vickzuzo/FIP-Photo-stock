import styled from "styled-components";

export const StyledDashboardCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 0 auto;
  padding: 1rem;
  border-radius: 0.8rem;
  background: ${(props) => props.theme.container};
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.1);
  transition: 0.4s ease;
  :hover {
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  }

  .icon {
    font-size: 2rem;
    color: ${(props) => props.theme.text};
  }
  .title {
    font-size: 1.2rem;
    font-weight: bold;
    color: ${(props) => props.theme.text};
  }

  .amount {
    font-size: 1.5rem;
    font-weight: bold;
    color: ${(props) => props.theme.primary};
  }
`;
