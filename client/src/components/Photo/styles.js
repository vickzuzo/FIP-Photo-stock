import styled from "styled-components";

export const StyledPhotos = styled.div`
  width: 80%;
  margin: 0 auto;

  .my-masonry-grid {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin-left: -30px;
    width: auto;
  }
  .my-masonry-grid_column {
    padding-left: 30px;
    background-clip: padding-box;
  }

  /* Style your items */
  .my-masonry-grid_column > div {
    margin-bottom: 30px;
  }
`;

export const StyledPhotoItem = styled.div`
  position: relative;
  cursor: default;
  transition: 0.3s ease;
  background-color: ${(props) => props.theme.container};
  padding: 1rem;
  height: fit-content;
  margin: 30px 0px;
  border-radius: 0.4rem;
  :hover {
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
  }

  .photo-image {
    position: relative;
    width: 100%;
    height: 60%;
    text-align: center;
    border-radius: 0.5rem;
    border-radius: 0.4rem;
    overflow: hidden;
    margin-bottom: 1rem;

    img {
      width: 100%;
      height: 100%;
      /* object-fit: cover; */
    }
    p {
      position: absolute;
      right: 0.6rem;
      top: 0.6rem;
      user-select: none;
      background: #fff;
      border-radius: 0.4rem;
      padding: 0.5rem;
      color: ${(props) => props.theme.text};
    }
  }

  .info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    svg {
      cursor: pointer;
      transition: 0.4s ease;
      :hover {
        fill: ${(props) => props.theme.primary};
      }
    }
  }
`;
