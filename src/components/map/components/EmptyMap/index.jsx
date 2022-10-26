import React, { useRef } from "react";
import { EmptyMapContainer } from "../Container";
import { Typography } from "@mui/material";

import imageIcon from "../../../../assets/image-icon.png";

export const EmptyMap = ({ onUpload }) => {
  const fileInputRef = useRef(null);

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const fileObj = event.target.files && event.target.files[0];
    if (!fileObj) {
      return;
    }
    onUpload(event.target.files[0]);
    event.target.value = null;
  };

  return (
    <EmptyMapContainer onClick={handleClick}>
      <input
        hidden
        accept="image/png"
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
      />
      <img src={imageIcon} alt="upload" />
      <Typography>Would you like to upload an image for this floor?</Typography>
    </EmptyMapContainer>
  );
};

export default EmptyMap;
