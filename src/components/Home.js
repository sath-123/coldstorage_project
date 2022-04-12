import React from 'react';
import { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import _coldStorageTemp from "../components/cs_data/coldStorageTemp.js";
import _dewPointTemp from "../components/cs_data/dewPointTemp.js";
import _ambientTemp from "../components/cs_data/ambientTemp.js";
import _ambientHumid from "../components/cs_data/ambientHumid.js";
import _doorSensorStatus from "../components/cs_data/doorSensorStatus.js";
import _powerSwitchStatus from "../components/cs_data/powerSwitchStatus.js";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing(3),
  },
}));

const Home= ({ setSelectedMode, selectedMode }) =>{
  // useEffect(() => {
  //   setvalue(localStorage.getItem("value"))

    
  // }, []);
  const classes = useStyles();
  const [state, setState] = React.useState({
    ColdRoomConditions: false,
    AmbientConditions: false,
    DoorStatus: false,
    UnitPower: false,
  });
  const [value, setvalue] = React.useState();
  const [value1, setvalue1] = React.useState();
  const [value2, setvalue2] = React.useState();
  const [value3, setvalue3] = React.useState();
  const [value4, setvalue4] = React.useState();
  const [value6, setvalue6] = React.useState();
  // setvalue4(0)
  var value5 = 0
  


  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    if (event.target.checked && event.target.name === "ColdRoomConditions") {
      setvalue(event.target.name)
      // localStorage.setItem("value", value);

    }
    else if (!event.target.checked && event.target.name === "ColdRoomConditions") {
      setvalue("")
      // localStorage.setItem("value", value);

    }

    else if (event.target.checked && event.target.name === "AmbientConditions") {
      setvalue1(event.target.name)
    }
    else if (!event.target.checked && event.target.name === "AmbientConditions") {
      setvalue1("")

    }
    else if (event.target.checked && event.target.name === "DoorStatus") {
      setvalue2(event.target.name)

    }
    else if (!event.target.checked && event.target.name === "DoorStatus") {
      setvalue2("")

    }
    else if (event.target.checked && event.target.name === "UnitPower") {
      setvalue6(event.target.name)

    }
    else if (!event.target.checked && event.target.name === "UnitPower") {
      setvalue6("")

    }

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
    // if(value4===0)
    // {
    setvalue4(6)
    if (value4 === 6) {
      setvalue4(0)
      // setvalue("")
      // setvalue1("")
      // setvalue2("")
    }
    // }
    // else if(value4===6)
    // {
    //   setvalue4(0)
    // }
  }


  const { ColdRoomConditions, AmbientConditions, DoorStatus,UnitPower } = state;
  const error = [ColdRoomConditions, AmbientConditions, DoorStatus,UnitPower].filter((v) => v).length !== 2;

  return (
    <div >
      
      &nbsp;
      <center>
        <h1 >{localStorage.getItem("id")} </h1>
      </center>
      &nbsp;
      <center>
        <Button color="primary"  onClick={() => refresh("1")} variant="contained">
          Refresh
        </Button>
      </center> 
      &nbsp; 
      <center>
        <Button color="primary" onClick={() => filter()} variant="contained">
          Filter
        </Button>
      </center>

      {value4 === 6 && 
        <center>
        <FormControl component="fieldset" className={classes.formControl}>
          {/* <FormLabel component="legend">Assign responsibility</FormLabel> */}
          <FormGroup>

            <FormControlLabel
              control={<Checkbox checked={ColdRoomConditions} onChange={handleChange} name="ColdRoomConditions" />}
              label="Cold Room Conditions"
            />
            <FormControlLabel
              control={<Checkbox checked={AmbientConditions} onChange={handleChange} name="AmbientConditions" />}
              label="Ambient Conditions"
            />
            <FormControlLabel
              control={<Checkbox checked={DoorStatus} onChange={handleChange} name="DoorStatus" />}
              label="Door Status"
            />
            <FormControlLabel
              control={<Checkbox checked={UnitPower} onChange={handleChange} name="UnitPower" />}
              label="Unit Power"
            />
          </FormGroup>
          {/* <FormHelperText>Be careful</FormHelperText> */}
        </FormControl>
          </center>}
      {value5 === 0 && value4!==6 &&
        < Grid>
          &nbsp; 
          <center>
            <h2> Cold Room Conditions: </h2>
          </center>
          &nbsp; 
          <Grid container spacing={1} alignItems="center" justifyContent="center">
            <_coldStorageTemp />
            <_dewPointTemp />
          </Grid>
          &nbsp; 
        </Grid>}

      {value5 === 0 && value4!==6 &&
        <Grid>
          &nbsp; 
          <center>
            {" "}
            <h2> Ambient Conditions: </h2>
          </center>
          &nbsp; 
          <Grid container spacing={1} alignItems="center" justifyContent="center">
            <_ambientTemp />
            <_ambientHumid />
          </Grid>
          &nbsp; 
        </Grid>
      }
      {value5 === 0 && value4!==6 &&
        <Grid>
          &nbsp;
          <center>
            {" "}
            <h2> Door Status: </h2>
          </center>
          &nbsp;
          <Grid container spacing={1} alignItems="center" justifyContent="center">
            <_doorSensorStatus />
          </Grid>
          &nbsp;
        </Grid>
      }
      {value5 === 0 && value4!==6 &&
        <Grid>
          &nbsp;
          <center>
            {" "}
            <h2> Unit Power: </h2>
          </center>
          &nbsp;
          <Grid container spacing={1} alignItems="center" justifyContent="center">
            <_powerSwitchStatus />
          </Grid>
          &nbsp;
        </Grid>
      }

      {value === 'ColdRoomConditions'  && value4===6 &&
        <Grid>
          &nbsp;
          <center>
            <h2> Cold Room Conditions: </h2>
          </center>
          &nbsp;
          <Grid container spacing={1} alignItems="center" justifyContent="center">
            <_coldStorageTemp />
            <_dewPointTemp />
          </Grid>
        </Grid>

      }

      {value1 === 'AmbientConditions'  && value4===6 &&
        <Grid>
          &nbsp;
          <center>
            <h2> Ambient Conditions: </h2>
          </center>
          &nbsp;
          <Grid container spacing={1} alignItems="center" justifyContent="center">
            <_ambientTemp />
            <_ambientHumid />
          </Grid>
        </Grid>

      }
      {value2 === 'DoorStatus'  && value4===6 &&
        <Grid>
          &nbsp;
          <center>
            <h2> DoorStatus: </h2>
          </center>
          &nbsp;
          <Grid container spacing={1} alignItems="center" justifyContent="center">
             <_doorSensorStatus />
          </Grid>
        </Grid>

      }
      {value6 === 'UnitPower'  && value4===6 &&
        <Grid>
          &nbsp;
          <center>
            <h2> DoorStatus: </h2>
          </center>
          &nbsp;
          <Grid container spacing={1} alignItems="center" justifyContent="center">
             
            <_powerSwitchStatus />
             
          </Grid>
        </Grid>

      }
      
    </div>
  );
}
export default Home;
