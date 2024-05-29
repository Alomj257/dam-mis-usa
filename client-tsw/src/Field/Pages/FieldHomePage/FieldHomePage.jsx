import React from "react";
import "./FieldHomePage.css";
import { Outlet } from "react-router-dom";
import SideBar from "../../Components/Sidebar/Sidebar";

const FieldHomePage = () => {
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

export default FieldHomePage;
