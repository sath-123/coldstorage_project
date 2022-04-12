import React from "react";
import { Line } from "react-chartjs-2";
import { useEffect, useState } from "react";
import { API } from "aws-amplify";
import { coldStorageTempDataByDate } from "../../../graphql/queries";
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

  const [csTemp, setCST] = useState([]);
  const [check, setCheck] = useState();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    var max = 9999;
    try {
      // get CS Temp
      const coldStorageTemp = await API.graphql({
        query: coldStorageTempDataByDate,
        variables: {
          unique_deviceID: localStorage.getItem("id"),
          eventDateTime: { ge: dateTime },
          limit: max,
          sortDirection: "ASC",
        },
      });

      const csTemp_init = coldStorageTemp.data.ColdStorageTempDataByDate.items;
      const length = csTemp_init.length;
      if (length === 0) {
        throw true;
      }

      const next = csTemp_init.map((x) => x.eventDateTime)[length - 1];
      const coldStorageTemp_next = await API.graphql({
        query: coldStorageTempDataByDate,
        variables: {
          unique_deviceID: localStorage.getItem("id"),
          eventDateTime: { ge: next },
          limit: max,
          sortDirection: "ASC",
        },
      });

      const csTemp_next =
        coldStorageTemp_next.data.ColdStorageTempDataByDate.items;
      const csTemp = csTemp_init.concat(csTemp_next);
      //console.log(csTemp);
      var count = 10;
      var ave = 0;
      var item;
      const averagedItems = [];

      for (var i = 0; i < csTemp.length; i++) {
        if (i % count == 0 && i != 0) {
          ave = ave / count;
          item = {
            eventDateTime: csTemp[i - count].eventDateTime,
            coldStorageTemp: ave.toString(),
          };
          averagedItems.push(item);
          ave = 0;
        }
        ave = ave + parseFloat(csTemp[i].coldStorageTemp);
      }

      if (csTemp.length % count != 0) {
        ave = ave / (csTemp.length % count);
        item = {
          eventDateTime:
            csTemp[csTemp.length - (csTemp.length % count)].eventDateTime,
          coldStorageTemp: ave.toString(),
        };
        averagedItems.push(item);
      }

      setCST(averagedItems);
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
    labels: csTemp.map((x) => x.eventDateTime),
    datasets: [
      {
        label: "Cold Storage Temp",
        fill: false,
        borderColor: "blue",
        borderWidth: 1,
        pointRadius: 2,
        data: csTemp.map((x) => x.coldStorageTemp),
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