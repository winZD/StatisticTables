import React from "react";
import { TableData } from "../../layout/table";
import _ from "lodash";

export const TableSum = (props) => {
  const { data } = props;

  const agents = data.filter((d) => d.Date.includes("Vuleta Dalibor"));

  const totalSumAgreed = data.reduce((acc, agent) => acc + agent.Agreed, 0);
  const totalSumSales = data.reduce((acc, agent) => acc + agent.Sales, 0);
  const totalSumLeads = data.reduce((acc, agent) => acc + agent.Leads, 0);
  console.log(totalSumLeads);
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
              <span>{totalSumAgreed}</span>
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
              <span>{totalSumSales}</span>
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
              <span>{totalSumLeads}</span>
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
