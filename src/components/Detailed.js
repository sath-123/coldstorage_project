// import React from "react";
// import { useState } from "react";
// import Button from "@material-ui/core/Button";
// import Grid from "@material-ui/core/Grid";
// import { Menu, MenuItem } from "@material-ui/core";
// import _coldStorageTemp from "../components/cs_data/coldStorageTemp.js";
// import _dewPointTemp from "../components/cs_data/dewPointTemp.js";
// import _ambientTemp from "../components/cs_data/ambientTemp.js";
// import _ambientHumid from "../components/cs_data/ambientHumid.js";
// import _doorSensorStatus from "../components/cs_data/doorSensorStatus.js";
// import _powerSwitchStatus from "../components/cs_data/powerSwitchStatus.js";
// import _onexRelayStatus from "../components/cs_data/onexRelayStatus";
// import _twoxRelayStatus from "../components/cs_data/twoxRelayStatus";
// import _threexRelayStatus from "../components/cs_data/threexRelayStatus";
// import _fourxRelayStatus from "../components/cs_data/fourxRelayStatus";
// import _fivexRelayStatus from "../components/cs_data/fivexRelayStatus";
// import _sixxRelayStatus from "../components/cs_data/sixxRelayStatus";
// import _sevenxRelayStatus from "../components/cs_data/sevenxRelayStatus";
// import _eightxRelayStatus from "../components/cs_data/eightxRelayStatus";
// import _batteryVoltage from "../components/cs_data/batteryVoltage";
// import _thermalBatteryTemp from "../components/cs_data/thermalBatteryTemp";
// import _waterInletTemp from "../components/cs_data/waterInletTemp";
// import _wetBulbTemp from "../components/cs_data/wetBulbTemp";
// import _graphFourHr from "./cs_graph/graphFourHr";
// import _graphTwelveHr from "./cs_graph/graphTwelveHr";
// import _graphOneDay from "./cs_graph/graphOneDay";
// import _graphOneWeek from "./cs_graph/graphOneWeek";

// const Detailed = ({ setSelectedMode, selectedMode }) => {
//   const [anchorEl, setAnchorEl] = useState(null);
//   const [graph, setGraph] = useState();
//   const handleOpen = (event) => {
//     setAnchorEl(event.currentTarget);
//   };
//   const handleClose = () => {
//     setAnchorEl(null);
//   };
//   const handleSelect = (id) => {
//     if (id === 0) {
//       setGraph(_graphFourHr);
//     }
//     if (id === 1) {
//       setGraph(_graphTwelveHr);
//     }
//     if (id === 2) {
//       setGraph(_graphOneDay);
//     }
//     if (id === 3) {
//       setGraph(_graphOneWeek);
//     }
//     handleClose();
//   };

//   function refresh(data) {
//     if (data === selectedMode) {
//       data = "0";
//       setSelectedMode(data);
//     } else {
//       setSelectedMode(data);
//     }
//   }
//   return (
//     <div>
//       &nbsp;
//       <center>
//         <h1>{localStorage.getItem("id")} </h1>
//       </center>
//       &nbsp;
//       <center>
//         <Button onClick={() => refresh("1")} variant="contained">
//           Refresh
//         </Button>
//       </center>
//       &nbsp;
//       <center>
//         {" "}
//         <h1> Relay Status: </h1>
//       </center>
//       &nbsp;
//       <Grid container spacing={1} alignItems="center" justifyContent="center">
//         <_onexRelayStatus />
//         <_twoxRelayStatus />
//         <_threexRelayStatus />
//         <_fourxRelayStatus />
//         <_fivexRelayStatus />
//         <_sixxRelayStatus />
//         <_sevenxRelayStatus />
//         <_eightxRelayStatus />
//       </Grid>
//       &nbsp;
//       <center>
//         {" "}
//         <h1> Others: </h1>
//       </center>
//       &nbsp;
//       <Grid container spacing={1} alignItems="center" justifyContent="center">
//         <_batteryVoltage />
//         <_thermalBatteryTemp />
//         <_waterInletTemp />
//         <_wetBulbTemp />
//       </Grid>
//       &nbsp;
//       <center>
//         {" "}
//         <h1> Graphs: </h1>
//       </center>
//       &nbsp; &nbsp;
//       <>
//         <center>
//           <Button
//             variant="contained"
//             aria-controls="simple-menu"
//             aria-haspopup="true"
//             onClick={handleOpen}
//           >
//             Select Graphs
//           </Button>
//           &nbsp; &nbsp;
//         </center>
//         <Menu
//           id="simple-menu"
//           anchorEl={anchorEl}
//           open={Boolean(anchorEl)}
//           onClose={handleClose}
//           anchorOrigin={{
//             vertical: "top",
//             horizontal: "center",
//           }}
//           transformOrigin={{
//             vertical: "top",
//             horizontal: "center",
//           }}
//         >
//           <MenuItem onClick={() => handleSelect(0)}>Last 4 Hour</MenuItem>
//           <MenuItem onClick={() => handleSelect(1)}>Last 12 Hours</MenuItem>
//           <MenuItem onClick={() => handleSelect(2)}>Last 24 Hours</MenuItem>
//           <MenuItem onClick={() => handleSelect(3)}>Last 7 Days</MenuItem>
//         </Menu>
//         {graph}
//       </>
//     </div>
//   );
// };

// export default Detailed;
import React from "react";
import { useState } from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import { Menu, MenuItem } from "@material-ui/core";
import _coldStorageTemp from "../components/cs_data/coldStorageTemp.js";
import _dewPointTemp from "../components/cs_data/dewPointTemp.js";
import _ambientTemp from "../components/cs_data/ambientTemp.js";
import _ambientHumid from "../components/cs_data/ambientHumid.js";
import _doorSensorStatus from "../components/cs_data/doorSensorStatus.js";
import _powerSwitchStatus from "../components/cs_data/powerSwitchStatus.js";
import _onexRelayStatus from "../components/cs_data/onexRelayStatus";
import _twoxRelayStatus from "../components/cs_data/twoxRelayStatus";
import _threexRelayStatus from "../components/cs_data/threexRelayStatus";
import _fourxRelayStatus from "../components/cs_data/fourxRelayStatus";
import _fivexRelayStatus from "../components/cs_data/fivexRelayStatus";
import _sixxRelayStatus from "../components/cs_data/sixxRelayStatus";
import _sevenxRelayStatus from "../components/cs_data/sevenxRelayStatus";
import _eightxRelayStatus from "../components/cs_data/eightxRelayStatus";
import _batteryVoltage from "../components/cs_data/batteryVoltage";
import _thermalBatteryTemp from "../components/cs_data/thermalBatteryTemp";
import _waterInletTemp from "../components/cs_data/waterInletTemp";
import _wetBulbTemp from "../components/cs_data/wetBulbTemp";
import _graphFourHr from "./cs_graph/graphFourHr";
import _graphTwelveHr from "./cs_graph/graphTwelveHr";
import _graphOneDay from "./cs_graph/graphOneDay";
import _graphOneWeek from "./cs_graph/graphOneWeek";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing(3),
  },
}));

const Detailed = ({ setSelectedMode, selectedMode }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [graph, setGraph] = useState();
  const [state, setState] = React.useState({
    RelayStatus: false,
    BatteryVoltage: false,
    ThermalBatteryTemperature: false,
    WaterInletTemperature: false,
    WetBulbTemperature:false,
  });
  const classes = useStyles();
  const [value, setvalue] = React.useState();
  const [value1, setvalue1] = React.useState();
  const [value2, setvalue2] = React.useState();
  const [value3, setvalue3] = React.useState();
  const [value4, setvalue4] = React.useState();
  const [value5,setvalue5] = React.useState();

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleSelect = (id) => {
    if (id === 0) {
      setGraph(_graphFourHr);
    }
    if (id === 1) {
      setGraph(_graphTwelveHr);
    }
    if (id === 2) {
      setGraph(_graphOneDay);
    }
    if (id === 3) {
      setGraph(_graphOneWeek);
    }
    handleClose();
  };

  function refresh(data) {
    if (data === selectedMode) {
      data = "0";
      setSelectedMode(data);
    } else {
      setSelectedMode(data);
    }
  }
  const filter = () => {
    
    setvalue5(6)
    if (value5 === 6) {
      setvalue5(0)
      
    }
  
  }

  var value6=0

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    if (event.target.checked && event.target.name === "RelayStatus") {
      setvalue(event.target.name)

    }
    if (!event.target.checked && event.target.name === "RelayStatus") {
      setvalue("")

    }

    else if (event.target.checked && event.target.name === "BatteryVoltage") {
      setvalue1(event.target.name)
    }
    else if (!event.target.checked && event.target.name === "BatteryVoltage") {
      setvalue1("")

    }
    else if (event.target.checked && event.target.name === "ThermalBatteryTemperature") {
      setvalue2(event.target.name)

    }
    else if (!event.target.checked && event.target.name === "ThermalBatteryTemperature") {
      setvalue2("")

    }
    else if (event.target.checked && event.target.name === "WaterInletTemperature") {
      setvalue3(event.target.name)

    }
    else if (!event.target.checked && event.target.name === "WaterInletTemperature") {
      setvalue3("")

    }
    else if (event.target.checked && event.target.name === "WetBulbTemperature") {
      setvalue4(event.target.name)

    }
    else if (!event.target.checked && event.target.name === "WetBulbTemperature") {
      setvalue4("")

    }
    

  };

  const { RelayStatus,BatteryVoltage ,ThermalBatteryTemperature , WaterInletTemperature,WetBulbTemperature} = state;
  const error = [ RelayStatus,BatteryVoltage ,ThermalBatteryTemperature , WaterInletTemperature,WetBulbTemperature].filter((v) => v).length !== 2;

  return (
    <div>
      &nbsp;
      <center>
        <h1 >{localStorage.getItem("id")} </h1>
      </center>
      &nbsp;
      <center>
        <Button color="primary" onClick={() => refresh("1")} variant="contained">
          Refresh
        </Button>
      </center>
      &nbsp;
      <center>
        <Button color ="primary" onClick={() => filter()} variant="contained">
          Filter
        </Button>
      </center>
      
      &nbsp;
      {value5 === 6 && 
        <center>
        <FormControl component="fieldset" className={classes.formControl}>
          {/* <FormLabel component="legend">Assign responsibility</FormLabel> */}
          <FormGroup>

            <FormControlLabel
              control={<Checkbox checked={RelayStatus} onChange={handleChange} name="RelayStatus" />}
              label="Relay Status"
            />
            <FormControlLabel
              control={<Checkbox checked={BatteryVoltage} onChange={handleChange} name="BatteryVoltage" />}
              label="BatteryVoltage"
            />
            <FormControlLabel
              control={<Checkbox checked={ThermalBatteryTemperature} onChange={handleChange} name="ThermalBatteryTemperature" />}
              label="ThermalBatteryTemperature"
            />
            <FormControlLabel
              control={<Checkbox checked={WaterInletTemperature} onChange={handleChange} name="WaterInletTemperature" />}
              label="WaterInletTemperature"
            />
            <FormControlLabel
              control={<Checkbox checked={WetBulbTemperature} onChange={handleChange} name="WetBulbTemperature" />}
              label="WetBulbTemperature"
            />
          </FormGroup>
          {/* <FormHelperText>Be careful</FormHelperText> */}
        </FormControl>
          </center>}
      { value6===0 && value5!==6 &&
      <div>
      <center>
        {" "}
        <h1> Relay Status: </h1>
      </center>
      &nbsp;
      <Grid container spacing={1} alignItems="center" justifyContent="center">
        <_onexRelayStatus />
        <_twoxRelayStatus />
        <_threexRelayStatus />
        <_fourxRelayStatus />
        <_fivexRelayStatus />
        <_sixxRelayStatus />
        <_sevenxRelayStatus />
        <_eightxRelayStatus />
      </Grid>
      &nbsp;
      <center>
        {" "}
        <h1> Others: </h1>
      </center>
      &nbsp;
      <Grid container spacing={1} alignItems="center" justifyContent="center">
        <_batteryVoltage />
        <_thermalBatteryTemp />
        <_waterInletTemp />
        <_wetBulbTemp />
      </Grid></div>}


      &nbsp;
      { value==='RelayStatus' && value5===6 &&
       <div><center>
        {" "}
        <h1> Relay Status: </h1>
      </center>
      &nbsp;
      <Grid container spacing={1} alignItems="center" justifyContent="center">
        <_onexRelayStatus />
        <_twoxRelayStatus />
        <_threexRelayStatus />
        <_fourxRelayStatus />
        <_fivexRelayStatus />
        <_sixxRelayStatus />
        <_sevenxRelayStatus />
        <_eightxRelayStatus />
      </Grid></div>}
      &nbsp;
      <center>
        {" "}
        <h1> Others: </h1>
      </center>
      &nbsp;
      <Grid container spacing={1} alignItems="center" justifyContent="center">
       {value1==='BatteryVoltage' &&<_batteryVoltage />}
        {value2==='ThermalBatteryTemperature' && <_thermalBatteryTemp />}
        {value3==='WaterInletTemperature' &&<_waterInletTemp />}
       {value4==='WetBulbTemperature' && <_wetBulbTemp />}
      </Grid>
      &nbsp;
      <center>
        {" "}
        <h1> Graphs: </h1>
      </center>
      &nbsp; &nbsp;
      
      <>
        <center>
          <Button
            variant="contained"
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleOpen}
          >
            Select Graphs
          </Button>
          &nbsp; &nbsp;
        </center>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
        >
          <MenuItem onClick={() => handleSelect(0)}>Last 4 Hour</MenuItem>
          <MenuItem onClick={() => handleSelect(1)}>Last 12 Hours</MenuItem>
          <MenuItem onClick={() => handleSelect(2)}>Last 24 Hours</MenuItem>
          <MenuItem onClick={() => handleSelect(3)}>Last 7 Days</MenuItem>
        </Menu>
        {graph}
      </>
    </div>
  );
};

export default Detailed;

