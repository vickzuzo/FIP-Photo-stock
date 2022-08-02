import styled from "styled-components";

export const StyledHeaderContainer = styled.div`
  padding: 1.5rem 0px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  background-color: ${(props) => props.theme.overlay};
  transition: 0.4s ease;
  box-shadow: ${(props) => props.active && "0px 2px 4px rgba(0, 0, 0, 0.1)"};
  color: white;
  .logo {
    color: white;
  }
  nav {
    a {
      color: white;
    }
  }

  .right {
    a.pricing {
      color: white;
    }
  }
`;

export const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 85%;
  margin: 0 auto;

  @media screen and (max-width: 65rem) {
    width: 95%;
  }

  .logo {
    display: flex;
    color: #fff;
    font-size: 2rem;
    transition: 0.4s ease;
    @media screen and (max-width: 65rem) {
      font-size: 1.2rem;
    }
    span {
      color: ${(props) => props.theme.primary};
      margin-left: 0.4rem;
    }
  }

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    a {
      transition: 0.4s ease;
      color: #fff;
      text-decoration: none;
      font-size: 1rem;
      font-weight: 300;
      padding: 0px 1rem;
      transition: 0.3s ease;
      &:hover {
        color: ${(props) => props.theme.primary};
      }
    }
    @media screen and (max-width: 65rem) {
      display: none;
    }
  }

  .right {
    display: flex;
    align-items: center;
    a.pricing {
      transition: 0.4s ease;
      color: #fff;
      text-decoration: none;
      font-size: 1rem;
      font-weight: 300;
      padding: 0px 1rem;
      transition: 0.3s ease;
      &:hover {
        color: ${(props) => props.theme.primary};
      }
    }
    a.auth {
      color: #000;
      text-decoration: none;
      font-size: 1rem;
      font-weight: 300;
      padding: 0.6rem 1rem;
      border-radius: 3px;
      transition: 0.3s ease;
      background: ${(props) => props.theme.primary};
      color: white;
      &:hover {
        border-radius: 0.8rem 2px 0.8rem 2px;
      }
    }
    .add_btn {
      color: #000;
      text-decoration: none;
      font-size: 1rem;
      font-weight: 300;
      padding: 0.6rem 1rem;
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
      &.logout {
        background: ${(props) => props.theme.red};
      }
    }
    @media screen and (max-width: 65rem) {
      display: none;
    }
  }
`;
