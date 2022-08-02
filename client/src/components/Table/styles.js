import styled from "styled-components";

export const TableContainer = styled.div`
overflow: hidden;
  table {
    width: 100%;
    height: 100%;
    border-collapse: collapse;
    box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.08);
    overflow-x: scroll;
  }
  thead {
    height: 64px;
    background: ${({ theme }) => theme.primary};
  }
  thead th {
    font-size: 14px;
    color: #fff;
    text-align: left;
    padding: 0 30px;
  }
  tr {
    height: 64px;
    border-bottom: 2px solid grey;
  }
  tr td {
    padding: 0 30px;
    border-bottom: 1px solid ${({ theme }) => theme.primary};
    img {
      width: 5rem;
      height: 5rem;
    }
  }
  @media only screen and (max-width: 992px) {
    table {
      white-space: nowrap;
    }
  }

  .actions_buttons {
    width: 50px;
  }
`;

export const TableWrapper = styled.section`
  margin: 4rem 0px;
  overflow: hidden;

  h1 {
    text-align: center;
    color: #000;
    font-size: 36px;
    font-weight: 900;
    padding: 50px 0 0 0;
  }
  .table-container {
    height: 700px;
    overflow: auto;
  }
  .table-container::-webkit-scrollbar {
    width: 10px;
  }
  .table-container::-webkit-scrollbar-thumb {
    height: 4px;
    background: ${({ theme }) => theme.primary};
    border-radius: 10px;
  }
  .table-container::-webkit-scrollbar-track {
    border: 1px solid ${({ theme }) => theme.primary};
    border-radius: 10px;
  }
  @media only screen and (max-width: 992px) {
    padding: 0 15px 0 15px;
    padding-bottom: 130px;

    .table-container::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const StyledEditButton = styled.div`
  margin: 0.3rem 0px;
  &.add_btn {
    color: #000;
    text-decoration: none;
    font-size: 1rem;
    font-weight: 300;
    padding: 0.3rem 1rem;
    border-radius: 3px;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: 0.3s ease;
    background: ${(props) => props.theme.primary};
    color: white;
    &:hover {
      border-radius: 0.8rem 2px 0.8rem 2px;
    }
    text-transform: capitalize;
    svg {
      margin-right: 0.5rem;
    }
    margin-left: 1rem;
    &.delete {
      background: ${(props) => props.theme.red};
    }
  }
`;
