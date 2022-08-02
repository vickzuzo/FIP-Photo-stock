import styled from "styled-components";

export const StyledModalFooter = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: 1rem 0px;

  .cancel_btn {
    margin-right: 1rem;
    background: ${(props) => props.theme.red};
  }
`;

export const StyledImagePreviewContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1rem 0px;
  .image_holder {
    max-width: 45%;
    max-height: 10rem;
    border-radius: 0.5rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
`;
