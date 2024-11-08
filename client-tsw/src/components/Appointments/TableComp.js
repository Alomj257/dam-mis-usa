import React from "react";
import myCollection from "../../myCollection";
import Arrow from "../../assets/Appointment/Arrow";
import PrevSvg from "../../assets/Appointment/PrevSvg";
import NextSvg from "../../assets/Appointment/NextSvg";
import HomeSvg from "../../assets/Appointment/HomeSvg";
import { Pagination } from "antd";
import CompleteStatusSvg from "../../assets/Appointment/CompleteStatusSvg";
import CancelStatusSvg from "../../assets/Appointment/CancelStatusSvg";
import PendingStatusSvg from "../../assets/Appointment/PendingStatusSvg";
import ConfirmStatusSvg from "../../assets/Appointment/ConfirmStatusSvg";

const TableComp = () => {
  //   const handlePageChanger = () => {
  //     // function
  //   };

  return (
    <>
      <div className="table_sec">
        <div
          style={{
            borderRadius: "8px",
            overflow: "hidden",
            border: "0.6px solid rgb(195, 195, 195)",
            height: "100%",
          }}
        >
          <table>
            <tr className="first_row">
              <td
                style={{
                  padding: "20px",
                  width: "50%",
                }}
              >
                PROBLEM
              </td>
              <td>WORKSHOP</td>
              <td>LOCATION</td>
              <td>DATE</td>
              <td>STATUS</td>
            </tr>

            {myCollection.map((item, index) => {
              const letterCount = handleLetterCount(item.Problem, 47);
              const status = haldleStatus(item.status);
              const href = `/truck-driver/appointments/${item.status}-appointment`;
              return (
                <tr key={item.status}>
                  <td
                    style={{
                      padding: "20px",
                      width: "40%",
                    }}
                    className="first_col"
                  >
                    <a
                      href={href}
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      {letterCount}
                    </a>
                  </td>
                  <td className="rest_col">{item.workshop}</td>
                  <td className="rest_col">{item.location}</td>
                  <td className="rest_col">{item.date}</td>
                  <td className="last_col">{status}</td>
                </tr>
              );
            })}
          </table>
          <div
            className="bottom_page_div"
            style={{
              display: "flex",
              padding: "20px",
              justifyContent: "space-between",
              fontWeight: "400",
              fontSize: "14px",
            }}
          >
            <button className="d-flex align-items-center">
              <PrevSvg /> Previous
            </button>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Pagination
                defaultCurrent={1}
                total={100}
                showSizeChanger={false}
                theme={{
                  token: {
                    colorBorder: "rgba(225, 242, 246, 1)",
                  },
                }}
              />
            </div>
            <button className="d-flex align-items-center">
              Next <NextSvg />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TableComp;

function handleLetterCount(text, maxLength) {
  if (text.length <= maxLength) {
    return text;
  }

  return text.substring(0, maxLength) + ".....";
}
function haldleStatus(s) {
  if (s === "Complete") {
    return (
      <StatusComp
        icon={<CompleteStatusSvg />}
        status={s}
        color="rgba(4, 122, 58, 1)"
      />
    );
  } else if (s === "Cancelled") {
    return (
      <StatusComp
        icon={<CancelStatusSvg />}
        status={s}
        color={" rgba(221, 0, 0, 1)"}
      />
    );
  } else if (s === "Pending") {
    return (
      <StatusComp
        icon={<PendingStatusSvg />}
        status={s}
        color={"rgba(221, 175, 10, 1)"}
      />
    );
  } else if (s === "Confirm") {
    return (
      <StatusComp
        icon={<ConfirmStatusSvg />}
        status={s}
        color={"rgba(4, 122, 58, 1)"}
      />
    );
  }
}
const StatusComp = ({ icon, status, color }) => {
  return (
    <div style={{ display: "flex" }}>
      {icon}
      <span style={{ color: color, marginLeft: "7px" }}>{status}</span>
    </div>
  );
};
