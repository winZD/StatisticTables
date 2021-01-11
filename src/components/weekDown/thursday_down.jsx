import React from "react";
import { TableData } from "../../layout/table";
import _ from "lodash";

export const TableThursdayDown = (props) => {
  const { data } = props;
  const agents = data.filter((d) =>
    d.Date.includes("2020-12-24T00:00:00+01:00")
  );
  console.log(agents);
  function shorterName(name) {
    var nam = name.split(" ");
    return nam[0] + " " + nam[1].charAt(0).toUpperCase() + ".";
  }
  const columns = [
    {
      Header: " ",
      Footer: " ",
      columns: [
        {
          Header: "Agent",
          Footer: "Ukupno",
          accessor: (data) => shorterName(data.AgentName),
        },
        {
          Header: "Dogovoreni sastanci",

          accessor: (data) => data.Agreed,
          Footer: (
            <div style={{ backgroundColor: "greenyellow" }}>
              <span>{_.sum(_.map(agents, (d) => d.Agreed))}</span>
            </div>
          ),
          width: 50,
          Cell: ({ cell }) => {
            const { value } = cell;
            const searchValues = () => {
              return (
                <div style={{ backgroundColor: "#0033FF", color: "white" }}>
                  {value}
                </div>
              );
            };

            return searchValues();
          },
        },
        {
          Header: "Prodaja",
          Footer: (
            <div style={{ backgroundColor: "greenyellow" }}>
              <span>{_.sum(_.map(agents, (d) => d.Sales))}</span>
            </div>
          ),
          accessor: (data) => data.Sales,
          Cell: ({ cell }) => {
            const { value } = cell;

            const searchValues = () => {
              return (
                <div style={{ backgroundColor: "#0066FF", color: "white" }}>
                  {value}
                </div>
              );
            };

            return searchValues();
          },
        },
        {
          Header: "Dogovoreni lead-ovi",
          Footer: (
            <div style={{ backgroundColor: "greenyellow" }}>
              <span>{_.sum(_.map(agents, (d) => d.Leads))}</span>
            </div>
          ),
          accessor: (data) => data.Leads,
          Cell: ({ cell }) => {
            const { value } = cell;
            const searchValues = () => {
              return (
                <div style={{ backgroundColor: "#0066FF", color: "white" }}>
                  {value}
                </div>
              );
            };

            return searchValues();
          },
        },
      ],
    },
  ];

  return <TableData columns={columns} data={agents} />;
};
