import React from "react";
import { Grid, IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import deleteIcon from "../../assets/delete-bin.svg";

const Container = styled(Grid)(({ theme }) => ({
  backgroundColor: "white",
  borderRadius: 10,
  padding: "24px 50px",
  borderLeft: "8px solid transparent",
  "&.highlighted": {
    borderLeft: `8px solid ${theme.palette.primary.main}`,
  },
}));

const Card = ({
  children,
  title,
  removable,
  onRemove,
  highlighted,
  childrenProps,
  ...props
}) => (
  <Container {...props} classes={{ root: highlighted && "highlighted" }}>
    <Grid container direction="column">
      <Grid item xs={12}>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item xs={removable ? 11 : 12}>
            {title}
          </Grid>
          {removable && (
            <Grid item xs={1}>
              <IconButton aria-label="delete-floor" onClick={onRemove}>
                <img src={deleteIcon} alt="delete" />
              </IconButton>
            </Grid>
          )}
        </Grid>
      </Grid>
      <Grid xs={12} item sx={childrenProps}>
        {children}
      </Grid>
    </Grid>
  </Container>
);

export default Card;
