import React from "react";
import { useEffect, useState } from "react";
import { API } from "aws-amplify";
import { dewPointTempDataByDate } from "../../graphql/queries";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const styles = {
  card: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    marginBottom: 16,
    fontSize: 20,
  },
  pos: {
    marginBottom: 20,
  },
};

function SimpleCard(props) {
  const [csdata, setData] = useState([]);
  const [check, setCheck] = useState();
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const coldStorageData = await API.graphql({
        query: dewPointTempDataByDate,
        variables: {
          unique_deviceID: localStorage.getItem("id"),
          limit: 1,
          sortDirection: "DESC",
        },
      });
      const csdata = coldStorageData.data.DewPointTempDataByDate.items;
      if (csdata.length === 0) {
        throw true;
      }
      setData(csdata);
      setCheck(0);
    } catch (err) {
      setCheck(1);
      console.log("error fetching data");
    }
  };

  const { classes } = props;

  if (check === 0) {
    return (
      <center>
        <div>
          <Card className={classes.card}>
            <CardContent>
              <Typography className={classes.title} color="textSecondary">
                Target Temperature
              </Typography>
              <Typography variant="h3" component="h2">
                {csdata.map((x) => x.dewPointTemp)[0]} °C
              </Typography>
              <Typography component="p">
                {csdata.map((x) => x.eventDateTime)[0]}
                <br />
                {csdata.map((x) => x.unique_deviceID)[0]}
              </Typography>
            </CardContent>
          </Card>
        </div>
      </center>
    );
  } else {
    return <div>{undefined}</div>;
  }
}
SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);
