import React from "react";
import { AiOutlineCloudDownload } from "react-icons/ai";
import { StyledPhotoItem } from "./styles";

const PhotoItem = ({ photo }) => {
  return (
    <StyledPhotoItem>
      <div className="photo-image">
        <img src={photo.imageUrl} alt="placeholder" />
        {photo.subscription === "premium" && <p>👑</p>}
      </div>
      <div className="info">
        <h3>{photo.title}</h3>
        <AiOutlineCloudDownload
          onClick={() => {
            if (photo.subscription === "premium") {
              alert("You need to be premium user to download this photo");
            }
          }}
        />
      </div>
    </StyledPhotoItem>
  );
};

export default PhotoItem;
