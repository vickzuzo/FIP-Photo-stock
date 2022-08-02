import styled from "styled-components";

export const StyledHeroContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60vh;
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.3) 20%,
      rgba(0, 0, 0, 0.7) 100%
    ),
    url("https://images.pexels.com/photos/12568118/pexels-photo-12568118.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const StyledHero = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 60%;
  margin: 0 auto;
  text-align: center;
  color: white;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    text-transform: capitalize;
  }
  p {
    font-size: 0.9rem;
    text-transform: capitalize;
  }
`;
export const SearchContainer = styled.div`
  display: flex;
  margin-top: 2rem;
  width: 60%;
  align-items: center;
  background: #fff;
  border-radius: 0.4rem;
  padding: 1.5rem 1rem;

  select {
    border: none;
    background: none;
    margin-right: 1rem;
  }
  .search {
    width: 100%;
    display: flex;
    input {
      border: none;
      background: none;
      flex: 1;
    }

    button {
      background: none;
      border: none;
      cursor: pointer;
      transition: 0.4s ease;
      opacity: 0.8;
      font-size: 1rem;
      :hover {
        opacity: 1;
        color: ${(props) => props.theme.primary};
      }
    }
  }
`;
