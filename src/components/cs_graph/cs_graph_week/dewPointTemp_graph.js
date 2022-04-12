import React from "react";
import { Line } from "react-chartjs-2";
import { useEffect, useState } from "react";
import { API } from "aws-amplify";
import { dewPointTempDataByDate } from "../../../graphql/queries";
import "chartjs-adapter-date-fns";

function Graph() {
  var currentTime = new Date();
  var currentOffset = currentTime.getTimezoneOffset();
  var ISTOffset = 330; // IST offset UTC +5:30
  var timeOffset = 10080; // 7day offset
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

  const [dpTemp, setDPT] = useState([]);
  const [check, setCheck] = useState();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    var max = 9999;
    try {
      // get DP TEMP
      const dewPointTemp = await API.graphql({
        query: dewPointTempDataByDate,
        variables: {
          unique_deviceID: localStorage.getItem("id"),
          eventDateTime: { ge: dateTime },
          limit: max,
          sortDirection: "ASC",
        },
      });

      const dpTemp_init = dewPointTemp.data.DewPointTempDataByDate.items;
      const length = dpTemp_init.length;
      if (length === 0) {
        throw true;
      }

      const next = dpTemp_init.map((x) => x.eventDateTime)[length - 1];
      const dewPointTemp_next = await API.graphql({
        query: dewPointTempDataByDate,
        variables: {
          unique_deviceID: localStorage.getItem("id"),
          eventDateTime: { ge: next },
          limit: max,
          sortDirection: "ASC",
        },
      });

      const dpTemp_next = dewPointTemp_next.data.DewPointTempDataByDate.items;
      const dpTemp = dpTemp_init.concat(dpTemp_next);
      //console.log(dpTemp);
      var count = 60;
      var ave = 0;
      var item;
      const averagedItems = [];

      for (var i = 0; i < dpTemp.length; i++) {
        if (i % count == 0 && i != 0) {
          ave = ave / count;
          item = {
            eventDateTime: dpTemp[i - count].eventDateTime,
            dewPointTemp: ave.toString(),
          };
          averagedItems.push(item);
          ave = 0;
        }
        ave = ave + parseFloat(dpTemp[i].dewPointTemp);
      }

      if (dpTemp.length % count != 0) {
        ave = ave / (dpTemp.length % count);
        item = {
          eventDateTime:
            dpTemp[dpTemp.length - (dpTemp.length % count)].eventDateTime,
          dewPointTemp: ave.toString(),
        };
        averagedItems.push(item);
      }

      setDPT(averagedItems);
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
          unit: "day",
        },
      },
    },
  };

  const data = {
    labels: dpTemp.map((x) => x.eventDateTime),
    datasets: [
      {
        label: "Cold Storage Target Temp",
        fill: false,
        borderColor: "red",
        borderWidth: 1,
        pointRadius: 2,
        data: dpTemp.map((x) => x.dewPointTemp),
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
