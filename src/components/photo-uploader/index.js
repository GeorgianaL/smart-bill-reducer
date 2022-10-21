import React from "react";
import { Grid, Typography, IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";

import pictureIcon from "../../assets/picture.svg";
import editIcon from "../../assets/edit.svg";
import deleteIcon from "../../assets/close-circle-line.svg";

const Container = styled(Grid)(({ theme }) => ({
  backgroundColor: theme.palette.grey[500],
  borderRadius: 10,
  padding: "8px 16px",
}));

const PhotoUploader = ({ url, name }) => {
  return (
    <Container
      container
      direction="row"
      alignItems="center"
      justifyContent="space-between"
    >
      {url !== "" && (
        <Grid item sx={{ marginRight: 2 }}>
          <Grid container direction="row" alignItems="center" spacing={1}>
            <Grid item>
              <a href={url} title={name}>
                <img alt={name} src={pictureIcon} />
              </a>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">Uploaded map</Typography>
            </Grid>
          </Grid>
        </Grid>
      )}
      <Grid item>
        <Grid container direction="row" spacing={2}>
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
