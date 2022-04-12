import React from "react";
import { Line } from "react-chartjs-2";
import { useEffect, useState } from "react";
import { API } from "aws-amplify";
import { ambientTempDataByDate } from "../../../graphql/queries";
import "chartjs-adapter-date-fns";

function Graph() {
  var currentTime = new Date();
  var currentOffset = currentTime.getTimezoneOffset();
  var ISTOffset = 330; // IST offset UTC +5:30
  var timeOffset = 1440; // 24hr offset
  var ISTTime = new Date(
    currentTime.getTime() + (ISTOffset + currentOffset - timeOffset) * 60000
  );
  var year = ISTTime.getFullYear();
  var month = ISTTime.getMonth() + 1;
  var day = ISTTime.getDate();
  var hour = ISTTime.getHours();
  var minute = ISTTime.getMinutes();
  var second = ISTTime.getSeconds();
  if (month.toString().length === 1) {
    month = "0" + month;
  }
  if (day.toString().length === 1) {
    day = "0" + day;
  }
  if (hour.toString().length === 1) {
    hour = "0" + hour;
  }
  if (minute.toString().length === 1) {
    minute = "0" + minute;
  }
  if (second.toString().length === 1) {
    second = "0" + second;
  }
  var dateTime =
    year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second;

  const [abTemp, setABT] = useState([]);
  const [check, setCheck] = useState();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    var max = 9999;
    try {
      // get AMB Temp
      const ambientTemp = await API.graphql({
        query: ambientTempDataByDate,
        variables: {
          unique_deviceID: localStorage.getItem("id"),
          eventDateTime: { ge: dateTime },
          limit: max,
          sortDirection: "ASC",
        },
      });

      const abTemp_init = ambientTemp.data.AmbientTempDataByDate.items;
      const length = abTemp_init.length;
      if (length === 0) {
        throw true;
      }
      const next = abTemp_init.map((x) => x.eventDateTime)[length - 1];
      const ambientTemp_next = await API.graphql({
        query: ambientTempDataByDate,
        variables: {
          unique_deviceID: localStorage.getItem("id"),
          eventDateTime: { ge: next },
          limit: max,
          sortDirection: "ASC",
        },
      });

      const abTemp_next = ambientTemp_next.data.AmbientTempDataByDate.items;
      const abTemp = abTemp_init.concat(abTemp_next);
      //console.log(abTemp);
      var count = 10;
      var ave = 0;
      var item;
      const averagedItems = [];

      for (var i = 0; i < abTemp.length; i++) {
        if (i % count == 0 && i != 0) {
          ave = ave / count;
          item = {
            eventDateTime: abTemp[i - count].eventDateTime,
            ambientTemp: ave.toString(),
          };
          averagedItems.push(item);
          ave = 0;
        }
        ave = ave + parseFloat(abTemp[i].ambientTemp);
      }

      if (abTemp.length % count != 0) {
        ave = ave / (abTemp.length % count);
        item = {
          eventDateTime:
            abTemp[abTemp.length - (abTemp.length % count)].eventDateTime,
          ambientTemp: ave.toString(),
        };
        averagedItems.push(item);
      }
      setABT(averagedItems);
      setCheck(0);
    } catch (err) {
      setCheck(1);
      console.log("error fetching data");
    }
  };


  const options = {
    legend: {
      position: "top",
      labels: {
        boxWidth: 3,
      },
    },
    scales: {
      x: {
        display: true,
        type: "time",
        time: {
          unit: "hour",
        },
      },
    },
  };

  const data = {
    labels: abTemp.map((x) => x.eventDateTime),
    datasets: [
      {
        label: "Ambient Temp",
        fill: false,
        borderColor: "green",
        borderWidth: 1,
        pointRadius: 2,
        data: abTemp.map((x) => x.ambientTemp),
      },
    ],
  };

  if (check === 0) {
    return (
      <div>
        <Line data={data} options={options} />
      </div>
    );
  } else {
    return <div>{undefined}</div>;
  }
}

export default Graph;