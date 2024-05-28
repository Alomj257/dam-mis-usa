import React from "react";
import NextIconSvg from "../../../assets/Appointment/NextIconSvg";
import { Link } from "react-router-dom";

const BackPathHeader = ({ data }) => {
  return (
    <div className="d-flex  align-items-center">
      {data?.map((item, key) => (
        <div
          className="d-flex align-items-center"
          //   style={{ padding: "4px 4px" }}
        >
          <Link
            className="text-secondary text-capitalize"
            to={item?.path}
            style={{ fontWeight: "500", fontSize: "18px", padding: "4px 8px" }}
          >
            {item?.name}
          </Link>
          {key < data?.length - 1 && <NextIconSvg />}
        </div>
      ))}
    </div>
  );
};

export default BackPathHeader;

// const data = [
//   { name: <HomeSvg />, path: "/appointment" },
//   { name: "Appointments", path: "/appointment" },
//   { name: "Appointments", path: "/appointment" },
// ];
