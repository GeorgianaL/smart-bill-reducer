import React from "react";
import {
  Grid,
  Typography,
  IconButton,
  Button as ButtonBase,
} from "@mui/material";
import { styled } from "@mui/material/styles";

import pictureIcon from "../../assets/picture.svg";
import editIcon from "../../assets/edit.svg";
import deleteIcon from "../../assets/close-circle-line.svg";

const Container = styled(Grid)(({ theme }) => ({
  backgroundColor: theme.palette.grey[500],
  borderRadius: 10,
  padding: "8px 16px",
}));
// const url = "https://cdn.filestackcontent.com/puJmQoySluzFHXk9Kfb4";
const url = "";

const PhotoUploader = ({ name, onUpload }) => {
  if (url === "") {
    return (
      <ButtonBase
        variant="outlined"
        component="label"
        onChange={(e) => onUpload(e.target.files[0])}
      >
        Upload
        <input hidden accept="image/png" multiple type="file" />
      </ButtonBase>
    );
  }
  return (
    <Container
      container
      direction="row"
      alignItems="center"
      justifyContent="space-between"
    >
      {url !== "" && (
        <Grid
          item
          sx={{ marginRight: 6, display: "flex", alignItems: "center" }}
        >
          <a href={url} title={name} target="_blank" rel="noreferrer">
            <img alt={name} src={pictureIcon} />
          </a>
          <Typography
            component="a"
            variant="subtitle1"
            href={url}
            target="_blank"
          >
            Uploaded map
          </Typography>
        </Grid>
      )}
      <Grid item>
        <Grid container direction="row">
          <Grid item>
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="label"
            >
              <input hidden accept="image/*" type="file" />
              <img src={editIcon} alt="Update" />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="label"
            >
              <img src={deleteIcon} alt="Delete" />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default PhotoUploader;
