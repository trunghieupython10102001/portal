import React from "react";
import "./Sidebar.scss";
import { Link, useLocation } from "react-router-dom";
import routes from "../../routes";

const Sidebar = ({ isDisplay }) => {
  const location = useLocation();
  return (
    <div
      style={{
        display: isDisplay && "block",
      }}
      className="sidebar"
    >
      <ul className="sidebar-menu">
        {routes.map((item, index) => {
          return (
            <Link
              to={item.path}
              key={index}
              className={`menu-item ${
                location.pathname.slice(1) === item.path ? "active" : ""
              }`}
            >
              <div className="menu-item-icon">
                <img src={item.icon} alt="icon" />
              </div>
              <p className="menu-item-text">{item.name}</p>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
