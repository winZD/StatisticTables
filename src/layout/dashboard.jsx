import React from "react";
import { useState, useEffect, useMemo } from "react";
import axios from "axios";
import styled from "styled-components";
import { registerLocale, setDefaultLocale } from "react-datepicker";
import { TableMonday } from "../components/weekUp/monday_up";
import { TableTuesday } from "../components/weekUp/tuesday_up";
import { TableWednesday } from "../components/weekUp/wednesday_up";
import { TableThursday } from "../components/weekUp/thursday_up";
import { TableFriday } from "../components/weekUp/friday_up";
import { TableSum } from "../components/weekUp/weekSum";
import { TableMondayDown } from "../components/weekDown/monday_down";
import { TableTuesdayDown } from "../components/weekDown/tuesday_down";
import { TableWednesdayDown } from "../components/weekDown/wednesday_down";
import { TableThursdayDown } from "../components/weekDown/thursday_down";
import { TableFridayDown } from "../components/weekDown/friday_down";
import { TableMondayDown2nd } from "../components/weekDown/monday_down_2nd";

import hr from "date-fns/locale/hr";
import _ from "lodash";
registerLocale("hr", hr);

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  ///////////////////////////////////////
  let options = {
    weekday: "long",
    month: "numeric",
    day: "numeric",
  };

  const agents_monday = data.filter((d) =>
    d.Date.includes("2020-12-21T00:00:00+01:00")
  );
  console.log(agents_monday);

  let formatDateMondayUp = new Date("2020-12-21T00:00:00+01:00");
  let formatDateTuesdayUp = new Date("2020-12-22T00:00:00+01:00");
  let formatDateWednesdayUp = new Date("2020-12-23T00:00:00+01:00");
  let formatDateThursdayUp = new Date("2020-12-24T00:00:00+01:00");
  let formatDateFridayUp = new Date("2020-12-25T00:00:00+01:00");
  let formatDateMondayDown = new Date("2020-12-21T00:00:00+01:00");
  let formatDateTuesdayDown = new Date("2020-12-22T00:00:00+01:00");
  let formatDateWednesdayDown = new Date("2020-12-23T00:00:00+01:00");
  let formatDateThursdayDown = new Date("2020-12-24T00:00:00+01:00");
  let formatDateFridayDown = new Date("2020-12-25T00:00:00+01:00");
  let formatDatemondayDown2nd = new Date("2020-12-28T00:00:00+01:00");

  //console.log(formatDateMondayUp.toLocaleDateString("hr-HR", options));

  useEffect(() => {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9zaWQiOiI2NiIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWUiOiJrb3JpbmEiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9naXZlbm5hbWUiOiJLb3JpbmEiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9zdXJuYW1lIjoiS292YcSNZXZpxIciLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJKZUFkbWluIiwiZXhwIjoxNjY0MTE2Mjg4LCJpc3MiOiJNYXRyaWNhIiwiYXVkIjoiU2FtcGxlQXVkaWVuY2UifQ.ab_L9Q1-iMsiqJmZKyLMkkcsHgEk-V9ru8zxofYCcTY";
    const fetchData = async () => {
      console.log("res 1");
      const response = await axios
        .get(
          "https://matrica.hr:5700/api/AndroidTV/Upper?startDate=2020-12-21&endDate=2020-12-25",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((res) => {
          setData(res.data);
          console.log(res.data);
        })
        .catch((error) => {
          console.error(error);
        });
    };

    /////////////////////////////////////////////
    const fetchData2 = async () => {
      console.log("res 2");
      const response = await axios
        .get(
          "https://matrica.hr:5700/api/AndroidTV/Lower?startDate=2020-12-21&endDate=2020-12-25",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((res) => {
          setData2(res.data);
          console.log(res.data);
          console.log(res);
        })
        .catch((error) => {
          console.error(error);
        });
      /////////////////////////////////////////////
    };
    fetchData();
    fetchData2();
  }, []);

  return (
    <div>
      <Title2>
        <strong>Salvis TV Dashboard</strong>
      </Title2>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          backgroundColor: "lightgrey",
        }}
      >
        <p>
          <strong>
            SASTANCI I PRODAJA PO AGENTU CC (tjedan po tjedan i suma za mjesec)
          </strong>
        </p>
        <Container2>
          <div>
            {formatDateMondayUp
              .toLocaleDateString("hr-HR", options)
              .toUpperCase()}
            <TableMonday data={data} />
          </div>
          <div>
            {formatDateTuesdayUp
              .toLocaleDateString("hr-HR", options)
              .toUpperCase()}{" "}
            <TableTuesday data={data} />
          </div>
          <div>
            {" "}
            {formatDateWednesdayUp
              .toLocaleDateString("hr-HR", options)
              .toUpperCase()}{" "}
            <TableWednesday data={data} />
          </div>
          <div>
            {" "}
            {formatDateThursdayUp
              .toLocaleDateString("hr-HR", options)
              .toUpperCase()}{" "}
            <TableThursday data={data} />
          </div>
          <div>
            {" "}
            {formatDateFridayUp
              .toLocaleDateString("hr-HR", options)
              .toUpperCase()}{" "}
            <TableFriday data={data} />
          </div>
          <div>
            {" "}
            {"UKUPNO"}
            <TableSum data={data} />
          </div>
        </Container2>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          backgroundColor: "lightgrey",
        }}
      >
        {" "}
        <p>
          <strong>
            {" "}
            SASTANCI I PRODAJA PO AGENTU PRODAJE (svaki tjedan od ponedjeljka do
            ponedjeljka)
          </strong>
        </p>
        <Container2>
          {" "}
          <div>
            {formatDateMondayDown
              .toLocaleDateString("hr-HR", options)
              .toUpperCase()}{" "}
            <TableMondayDown data={data2} />
          </div>
          <div>
            {formatDateTuesdayDown
              .toLocaleDateString("hr-HR", options)
              .toUpperCase()}{" "}
            <TableTuesdayDown data={data2} />
          </div>
          <div>
            {formatDateWednesdayDown
              .toLocaleDateString("hr-HR", options)
              .toUpperCase()}{" "}
            <TableWednesdayDown data={data2} />
          </div>
          <div>
            {formatDateThursdayDown
              .toLocaleDateString("hr-HR", options)
              .toUpperCase()}{" "}
            <TableThursdayDown data={data2} />
          </div>
          <div>
            {formatDateFridayDown
              .toLocaleDateString("hr-HR", options)
              .toUpperCase()}{" "}
            <TableFridayDown data={data2} />
          </div>
          <div>
            {formatDatemondayDown2nd
              .toLocaleDateString("hr-HR", options)
              .toUpperCase()}{" "}
            <TableMondayDown2nd data={data2} />
          </div>
        </Container2>
      </div>
    </div>
  );
};

export default Dashboard;

const Container2 = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: auto auto auto auto auto auto;
  backgroundColor: "lightgrey",
  margin: 0px;
   min-height: 100%;
   width: 100%;
  
  justify-content: center;
  text-align: center;
`;
const Title2 = styled.div`
  height: 40px;
  width: 100%;
  grid-area: header;
  background-color: green;
  text-align: left;
  justify-content: center;
  padding-top: 10px;
  padding-left: 10px;
  align-items: center;
}
  color: white;
`;
const Main2 = styled.div`
  grid-area: main;

  text-align: center;
  justify-content: left;
`;

const Container = styled.div`
  display: grid;
  grid-template-areas:
    "header header header header header header"
    "menu main main main right right"
    "menu footer footer footer footer footer";

  grid-template-columns: 0px 1fr;
  background-color: #b0b0b0;

  height: 100%;
`;

const Title = styled.div`
  height: 30px;
  grid-area: header;
  background-color: green;
  text-align: left;
  justify-content: center;
  color: white;
`;
const Main = styled.div`
  grid-area: main;

  text-align: center;
  justify-content: left;
`;
