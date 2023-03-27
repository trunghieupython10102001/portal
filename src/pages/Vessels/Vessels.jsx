import React from "react";
import "./Vessels.scss";
import { useNavigate, useParams } from "react-router-dom";
import data from "../../data/data.json";
import BackIcon from "../../assets/icons/arrow.png";

const Vessels = () => {
  const { name } = useParams();
  const vessels = data.Vessels;
  const vesselColumns = Object.keys(data.Vessels[0]);
  const navigate = useNavigate();

  return (
    <div className="vessels">
      <div className="vessels-header">
        <div
          onClick={() => {
            navigate(-1);
          }}
          className="vessels-header-back"
        >
          <img src={BackIcon} alt="back-icon" />
        </div>
        <h2 className="vessels-header-title">{`Vessels in port ${name}`}</h2>
      </div>
      <div className="container">
        <table className="port-table">
          <thead>
            <tr>
              {vesselColumns.map((column, index) => {
                return (
                  <th className={column} key={index}>
                    {column}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {vessels.map((vessel, index) => {
              return (
                <tr>
                  <td className="name">{vessel.Name}</td>
                  <td className="country">{vessel["IMO number"]}</td>
                  <td className="terminal">{vessel["Vessel type"]}</td>
                  <td className="berth">{vessel.Age}</td>
                  <td className="rating">{vessel["Port arrival date"]}</td>
                  <td className="vessel">{vessel["Port depature date"]}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Vessels;
