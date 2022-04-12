import React from "react";
import { Line } from "react-chartjs-2";
import { useEffect, useState } from "react";
import { API } from "aws-amplify";
import { thermalBatteryTempDataByDate } from "../../../graphql/queries";
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

  const [tbTemp, setTBT] = useState([]);
  const [check, setCheck] = useState();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    var max = 9999;
    try {
      // get TBatt Temp
      const thermalBatteryTemp = await API.graphql({
        query: thermalBatteryTempDataByDate,
        variables: {
          unique_deviceID: localStorage.getItem("id"),
          eventDateTime: { ge: dateTime },
          limit: max,
          sortDirection: "ASC",
        },
      });

      const tbTemp_init =
        thermalBatteryTemp.data.ThermalBatteryTempDataByDate.items;
      const length = tbTemp_init.length;
      if (length === 0) {
        throw true;
      }

      const next = tbTemp_init.map((x) => x.eventDateTime)[length - 1];
      const thermalBatteryTemp_next = await API.graphql({
        query: thermalBatteryTempDataByDate,
        variables: {
          unique_deviceID: localStorage.getItem("id"),
          eventDateTime: { ge: next },
          limit: max,
          sortDirection: "ASC",
        },
      });

      const tbTemp_next =
        thermalBatteryTemp_next.data.ThermalBatteryTempDataByDate.items;
      const tbTemp = tbTemp_init.concat(tbTemp_next);
      //console.log(tbTemp);

      var count = 60;
      var ave = 0;
      var item;
      const averagedItems = [];

      for (var i = 0; i < tbTemp.length; i++) {
        if (i % count == 0 && i != 0) {
          ave = ave / count;
          item = {
            eventDateTime: tbTemp[i - count].eventDateTime,
            thermalBatteryTemp: ave.toString(),
          };
          averagedItems.push(item);
          ave = 0;
        }
        ave = ave + parseFloat(tbTemp[i].thermalBatteryTemp);
      }

      if (tbTemp.length % count != 0) {
        ave = ave / (tbTemp.length % count);
        item = {
          eventDateTime:
            tbTemp[tbTemp.length - (tbTemp.length % count)].eventDateTime,
          thermalBatteryTemp: ave.toString(),
        };
        averagedItems.push(item);
      }

      setTBT(averagedItems);
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
    labels: tbTemp.map((x) => x.eventDateTime),
    datasets: [
      {
        label: "Thermal Batt Temp",
        fill: false,
        borderColor: "red",
        borderWidth: 1,
        pointRadius: 2,
        data: tbTemp.map((x) => x.thermalBatteryTemp),
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
