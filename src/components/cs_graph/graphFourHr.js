import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from '@material-ui/core/Paper';
import _ambientHumid_graph from "../cs_graph/cs_graph_4hrs/ambientHumid_graph";
import _ambientTemp_graph from "../cs_graph/cs_graph_4hrs/ambientTemp_graph";
import _batteryVoltage_graph from "../cs_graph/cs_graph_4hrs/batteryVoltage_graph";
import _coldStorageTemp_graph from "../cs_graph/cs_graph_4hrs/coldStorageTemp_graph";
import _dewPointTemp_graph from "../cs_graph/cs_graph_4hrs/dewPointTemp_graph";
import _thermalBatteryTemp_graph from "../cs_graph/cs_graph_4hrs/thermalBatteryTemp_graph";
import _waterInletTemp_graph from "../cs_graph/cs_graph_4hrs/waterInletTemp_graph";
import _wetBulbTemp_graph from "../cs_graph/cs_graph_4hrs/wetBulbTemp_graph";

function Graph() {
  return (
    <div className="Graph main">
      &nbsp; &nbsp;
      <center>
        <h2>Last 4 Hours</h2>
      </center>
      &nbsp;
      &nbsp;
      &nbsp;
      <Grid container spacing={4} alignItems="center" justifyContent="center">
        <Grid md={6} sm={5}>
          <Paper>
            <_ambientHumid_graph />
            <_ambientTemp_graph />
            <_batteryVoltage_graph />
            <_coldStorageTemp_graph />
            <_dewPointTemp_graph />
            <_thermalBatteryTemp_graph />
            <_waterInletTemp_graph />
            <_wetBulbTemp_graph />
          </Paper>
        </Grid>
      </Grid>
      <br />
    </div>
  );
}
export default Graph;