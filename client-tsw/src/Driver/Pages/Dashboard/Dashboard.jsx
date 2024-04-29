import React from "react";
import SideBar from "../../Components/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div>
      <div className="d-flex" style={{ height: "fit" }}>
        <SideBar />
        <div style={{ width: "80%" }}>
          <div
            style={{
              paddingLeft: "50px",
              paddingRight: "50px",
              paddingTop: "20px",
            }}
          >
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
