import React from "react";
import "./Ports.scss";
import data from "../../data/data.json";
import { Link } from "react-router-dom";

const Ports = () => {
  const portColumns = Object.keys(data.Ports[0]);
  portColumns.push("Action");
  const ports = data.Ports;

  // remove description
  portColumns.splice(1, 1);
  console.log(portColumns);
  return (
    <div className="port">
      <h2 className="port-title">Ports</h2>
      <div className="container">
        <table className="port-table">
          <thead>
            <tr>
              {portColumns.map((column, index) => {
                return (
                  <th className={column} key={index}>
                    {column}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {ports.map((port, index) => {
              return (
                <tr>
                  <td className="name">{port.Name}</td>
                  <td className="country">{port.Country}</td>
                  <td className="terminal">{port["No. of Terminals"]}</td>
                  <td className="berth">{port["No. of Berths"]}</td>
                  <td className="rating">
                    {port["Emissions rating (from A to F)"]}
                  </td>
                  <td className="vessel">{port["Vessel calls"]}</td>
                  <td className="tugboat">{port["Tugboat jobs"]}</td>
                  <td className="action">
                    <Link className="action-link" to={`${port.Name}`}>
                      Detail
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Ports;
// src / assets / files / data.xlsx;
