import * as React from "react";
import { Grid, IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";

import deleteIcon from "../../assets/delete-bin.svg";

const Container = styled(Grid)(({ theme, hideborder }) => ({
  img: {
    display: "none",
  },
  "&:hover": {
    img: {
      display: "block",
    },
  },
  ".MuiOutlinedInput-root": {
    height: 40,
    borderRadius: 12,
    marginLeft: hideborder ? -10 : 0,
    fieldset: {
      borderColor: hideborder ? "transparent" : theme.palette.grey[400],
    },
    "&:hover fieldset": {
      borderColor: theme.palette.grey[400],
    },
    "&.Mui-focused fieldset": {
      borderColor: theme.palette.grey[400],
      borderWidth: 1,
    },
  },
  ".MuiTextField-root": {
    width: "100%",
  },
}));

const CssTextField = styled(TextField)(({ theme, fullWidth }) => ({
  marginTop: 10,
  borderWidth: 1,
  marginRight: 8,
  "& label.Mui-focused": {
    borderColor: theme.palette.grey[400],
  },
  ".MuiInputBase-input .MuiOutlinedInput-input": {
    backgroundColor: "transparent",
  },
  ".MuiFormLabel-root": {
    top: -7,
  },
}));

const Input = ({ value, hideborder, removable, onRemove, ...props }) => {
  return (
    <Container
      container
      direction="row"
      alignItems="flex-end"
      hideborder={hideborder}
      sx={{
        width: props.fullWidth ? "100%" : 233,
      }}
    >
      <Grid item xs={removable ? 10 : 12}>
        <CssTextField value={value} {...props} />
      </Grid>
      {removable && (
        <Grid item xs={removable ? 2 : 0}>
          <IconButton aria-label="delete" onClick={onRemove}>
            <img src={deleteIcon} alt="delete" />
          </IconButton>
        </Grid>
      )}
    </Container>
  );
};

export default Input;
