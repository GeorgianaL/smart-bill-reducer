import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Grid,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import Button from "../../components/button";
import RadioButton from "../../components/radio";
import Checkmark from "../../components/animated-checkmark";
import { switchPower } from "../../actions";
import closeIcon from "../../assets/x-close.svg";
import relayImage from "../../assets/relay-blue.svg";
import pieIcon from "../../assets/pie.svg";

const CloseIcon = () => <img src={closeIcon} alt="close" />;

const SwithPowerDialog = ({ open, handleClose, loading, relayData, zones }) => {
  const dispatch = useDispatch();

  const [status, setStatus] = useState("initial");

  const power = relayData.powerOn;

  const onConfirm = () =>
    dispatch(switchPower(!power))
      .then(() => {
        setStatus("fulfilled");
      })
      .catch(() => {
        setStatus("rejected");
      });

  let dialog;

  switch (status) {
    case "fulfilled":
      dialog = (
        <>
          <DialogTitle sx={{ m: 0, p: 4, textAlign: "center" }}>
            <IconButton
              aria-label="close"
              onClick={handleClose}
              sx={{
                position: "absolute",
                right: 8,
                top: 8,
                color: (theme) => theme.palette.grey[500],
              }}
            >
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent>
            <Grid container direction="column" spacing={2}>
              <Grid item>
                <Checkmark size={120} />
              </Grid>
              <Grid item>
                <Typography color="primary" variant="h5" align="center">
                  {`Switched ${power ? "on" : "off"}!`}
                </Typography>
              </Grid>
              <Grid item sx={{ m: 4 }}>
                <Typography>{`You successfully switched ${
                  power ? "on" : "off"
                } the power on ${zones.join(", ")}.`}</Typography>
              </Grid>
            </Grid>
          </DialogContent>
        </>
      );
      break;
    case "rejected":
      dialog = (
        <DialogContent>
          <DialogTitle sx={{ m: 0, p: 4, textAlign: "center" }}>
            Something went wrong
          </DialogTitle>
          <Typography>
            We couldn't execute your request. Please try again later.
          </Typography>
        </DialogContent>
      );
      break;
    default:
      dialog = (
        <>
          <DialogTitle sx={{ m: 0, p: 2 }}>
            <IconButton
              aria-label="close"
              onClick={handleClose}
              sx={{
                position: "absolute",
                right: 8,
                top: 8,
                color: (theme) => theme.palette.grey[500],
              }}
            >
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent>
            <Grid container direction="column" spacing={2}>
              <Grid item>
                <img src={relayImage} alt="relay" />
              </Grid>
              <Grid item>
                <Typography variant="h5">{relayData.name}</Typography>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1">
                  You can switch {power ? "off" : "on"} the relay for{" "}
                  {zones.join(", ")}.
                </Typography>
              </Grid>
              {loading && <Typography>Switching off now ... </Typography>}
              <Grid item sx={{ display: "flex" }}>
                <Typography variant="subtitle1" sx={{ marginRight: 2 }}>
                  Switch {power ? "off" : "on"}
                </Typography>
                <RadioButton checked={power} onChange={onConfirm} />
              </Grid>
              <Grid item>
                <Typography variant="subtitle1">
                  You can also change schedules for these zones:
                </Typography>
              </Grid>
              <Grid item>
                <Link to="/schedules" style={{ textDecoration: "none" }}>
                  <Button
                    variant="text"
                    color="primary"
                    startIcon={<img src={pieIcon} alt="pie" />}
                    onClick={handleClose}
                  >
                    Go to Schedules
                  </Button>
                </Link>
              </Grid>
            </Grid>
          </DialogContent>
        </>
      );
      break;
  }

  return (
    <Dialog onClose={handleClose} open={open} maxWidth="xs">
      {dialog}
    </Dialog>
  );
};

export default SwithPowerDialog;
