import React from "react";
import Add_id from "./cs_comp/Add_id";
import Remove_id from "./cs_comp/Remove_id";
import Grid from "@material-ui/core/Grid";

const Manage = () => {
  return (
    <div>
      &nbsp;
      <center>
        {" "}
        <h1> Add ID: </h1>
      </center>
      <Grid container spacing={4} alignItems="center" justifyContent="center">
        <Grid item md={3}>
          <Add_id />
        </Grid>
      </Grid>
      <center>
        {" "}
        <h1> Remove ID: </h1>
      </center>
      <Grid container spacing={4} alignItems="center" justifyContent="center">
        <Grid item md={3}>
          <Remove_id />
        </Grid>
      </Grid>
    </div>
  );
};

export default Manage;