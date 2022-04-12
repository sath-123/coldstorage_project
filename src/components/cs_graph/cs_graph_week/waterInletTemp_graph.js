import React from "react";
import { Line } from "react-chartjs-2";
import { useEffect, useState } from "react";
import { API } from "aws-amplify";
import { waterInletTempDataByDate } from "../../../graphql/queries";
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

  const [wiTemp, setWIT] = useState([]);
  const [check, setCheck] = useState();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    var max = 9999;
    try {
      // get WInlet Temp
      const waterInletTemp = await API.graphql({
        query: waterInletTempDataByDate,
        variables: {
          unique_deviceID: localStorage.getItem("id"),
          eventDateTime: { ge: dateTime },
          limit: max,
          sortDirection: "ASC",
        },
      });
      const wiTemp_init = waterInletTemp.data.WaterInletTempDataByDate.items;
      const length = wiTemp_init.length;
      if (length === 0) {
        throw true;
      }
      const next = wiTemp_init.map((x) => x.eventDateTime)[length - 1];
      const waterInletTemp_next = await API.graphql({
        query: waterInletTempDataByDate,
        variables: {
          unique_deviceID: localStorage.getItem("id"),
          eventDateTime: { ge: next },
          limit: max,
          sortDirection: "ASC",
        },
      });

      const wiTemp_next =
        waterInletTemp_next.data.WaterInletTempDataByDate.items;
      const wiTemp = wiTemp_init.concat(wiTemp_next);
      //console.log(wiTemp);
      var count = 60;
      var ave = 0;
      var item;
      const averagedItems = [];

      for (var i = 0; i < wiTemp.length; i++) {
        if (i % count == 0 && i != 0) {
          ave = ave / count;
          item = {
            eventDateTime: wiTemp[i - count].eventDateTime,
            waterInletTemp: ave.toString(),
          };
          averagedItems.push(item);
          ave = 0;
        }
        ave = ave + parseFloat(wiTemp[i].waterInletTemp);
      }

      if (wiTemp.length % count != 0) {
        ave = ave / (wiTemp.length % count);
        item = {
          eventDateTime:
            wiTemp[wiTemp.length - (wiTemp.length % count)].eventDateTime,
          waterInletTemp: ave.toString(),
        };
        averagedItems.push(item);
      }
      setWIT(averagedItems);
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
    labels: wiTemp.map((x) => x.eventDateTime),
    datasets: [
      {
        label: "Water Inlet Temp",
        fill: false,
        borderColor: "blue",
        borderWidth: 1,
        pointRadius: 2,
        data: wiTemp.map((x) => x.waterInletTemp),
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
