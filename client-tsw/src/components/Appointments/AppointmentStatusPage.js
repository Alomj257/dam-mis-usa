import React from "react";
import NewTaskSvg from "../../assets/Appointment/NewTask";
import NotificationSvg from "../../assets/Appointment/NotificationSvg";
import Arrow from "../../assets/Appointment/Arrow";
import PrevSvg from "../../assets/Appointment/PrevSvg";
import NextSvg from "../../assets/Appointment/NextSvg";
import { Pagination } from "antd";
import CompleteStatusSvg from "../../assets/Appointment/CompleteStatusSvg";
import CancelStatusSvg from "../../assets/Appointment/CancelStatusSvg";
import PendingStatusSvg from "../../assets/Appointment/PendingStatusSvg";
import ConfirmStatusSvg from "../../assets/Appointment/ConfirmStatusSvg";

const ApointmentStatusPage = ({ header, allData, status }) => {
  const statusFiltering = DataFilter(allData, status);

  return (
    <div style={{ width: "80%", margin: "50px" }}>
      <Header header={header} />
      <div className="table_sec" style={{ height: "70vh" }}>
        <div
          style={{
            borderRadius: "8px",
            overflow: "hidden",
            border: "0.6px solid rgb(195, 195, 195)",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
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

            {statusFiltering.map((item, index) => {
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
              />
            </div>
            <button className="d-flex align-items-center">
              Next <NextSvg />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApointmentStatusPage;

const DataFilter = (data, status) => {
  return data.filter((item) => item.status === status);
};
const Header = ({ header, subheader, btn, fnc }) => {
  return (
    <div
      className="head_sec"
      style={{ marginBottom: "30px", marginTop: "30px" }}
    >
      <div>
        <h2 style={{ fontWeigt: "500", fontSize: "2.7rem" }}>{header}</h2>
        {subheader}
      </div>

      <div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            padding: "5px",
          }}
        >
          <NotificationSvg />
          <ProfileImg />
          <Arrow />
        </div>

        {btn ? (
          <button className="new-apoint-btn" onClick={fnc}>
            <NewTaskSvg color={"White"} />{" "}
            <span className="ms-1">New Appointment</span>
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
// letter Count handler
function handleLetterCount(text, maxLength) {
  if (text.length <= maxLength) {
    return text;
  }

  return text.substring(0, maxLength) + ".....";
}

// Status Handler

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
const ProfileImg = ({ img }) => {
  return (
    <div
      style={{
        borderRadius: "50%",
        height: "40px",
        width: "40px",
        margin: "15px",
      }}
    >
      <img
        src={img}
        alt="img"
        srcset=""
        style={{
          borderRadius: "50%",
          height: "40px",
          width: "40px",
          border: "0.1px solid black",
        }}
      />
    </div>
  );
};
