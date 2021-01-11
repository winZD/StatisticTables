import React from "react";
import { TableData } from "../../layout/table";
import _ from "lodash";

export const TableFriday = (props) => {
  const { data } = props;
  const agents = data.filter((d) =>
    d.Date.includes("2020-12-25T00:00:00+01:00")
  );
  console.log(agents);

  const columns = [
    {
      Header: " ",
      Footer: " ",
      columns: [
        {
          Header: "Agent",
          Footer: "Ukupno",
          accessor: (data) => data.AgentName,
        },
        {
          Header: "Dogovoreni sastanci",

          accessor: (data) => data.Agreed,
          Footer: (
            <div style={{ backgroundColor: "greenyellow" }}>
              <span>{_.sum(_.map(agents, (d) => d.Agreed))}</span>
            </div>
          ),

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
