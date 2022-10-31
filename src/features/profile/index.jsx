import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import Page from "../page";
import Card from "../../components/card";
import withNavigationBar from "../../hoc/withNavigationBar";
import { removeCookie } from "../../utils/cookies";

const Profile = () => {
  const navigate = useNavigate();
  const logOut = () => {
    removeCookie("token");
    navigate("/login");
  };
  return (
    <Page>
      <Card>
        <Button color="primary" variant="contained" onClick={logOut}>
          Log out
        </Button>
      </Card>
    </Page>
  );
};

export default withNavigationBar(Profile);
