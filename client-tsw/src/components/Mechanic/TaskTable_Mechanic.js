import React, { useEffect, useState } from "react";
import { Pagination } from "antd";
import PrevSvg from "../../assets/Appointment/PrevSvg";
import NextSvg from "../../assets/Appointment/NextSvg";
import PendingStatusSvg from "../../assets/Appointment/PendingStatusSvg";
import CompleteStatusSvg from "../../assets/Appointment/CompleteStatusSvg";
import CancelStatusSvg from "../../assets/Appointment/CancelStatusSvg";
import StatusComp from "../../assets/Mechanic/StatusComp";
import Header from "./Header_Mechanic";
import { useNavigate } from "react-router-dom";

// for rounting problem
function removeSpaceBetweenWords(inputString) {
  return inputString.replace(/(\S)\s+(\S)/g, "$1$2");
}

const TaskTable = ({ myData, taskStatus, handlePage, totalPage }) => {
  if (taskStatus === "In Progress") {
    taskStatus = "Confirm";
  }
  if (taskStatus === "Rejected") {
    taskStatus = "Cancelled";
  }
  const statusFiltering = DataFilter(myData, taskStatus);
  const navigate = useNavigate();

  return (
    <div
      style={{
        width: "80%",
        margin: "50px",
      }}
    >
      <Header header={taskStatus + "  Appointments"} />

      <div className="table_sec" style={{ height: "78vh" }}>
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
            <tr className="first_row" style={{ width: "100%" }}>
              <td
                style={{
                  paddingLeft: "70px",
                }}
              >
                PROBLEM
              </td>
              <td>NAME</td>
              <td>TRUCK MODEL</td>
              <td>DATE</td>
              <td>STATUS</td>
            </tr>

            {Array.isArray(statusFiltering)
              ? statusFiltering.map((item, index) => {
                  const status = handleStatus(item.status);
                  // const letterCount = handleLetterCount(item.problem, 47);
                  const s = removeSpaceBetweenWords(item.status);
                  const href = `/mechanic/${s}-details`;
                  return (
                    <tr key={index}>
                      <td
                        className="rest_col"
                        style={{
                          paddingLeft: "70px",
                        }}
                        onClick={() => navigate(href, { state: item })}
                      >
                        {item?.description?.length > 47
                          ? item.description?.slice(0, 47) + "..."
                          : item.description}
                      </td>
                      <td className="rest_col">{item?.name}</td>
                      <td className="rest_col">{item?.model}</td>
                      <td className="rest_col">{item?.timeSlot}</td>
                      <td className="rest_col">{status}</td>
                    </tr>
                  );
                })
              : ""}
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
                total={totalPage * 10}
                onChange={handlePage}
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

export default TaskTable;

const DataFilter = (data, status) => {
  return data.filter((item) => item.status === status);
};

function handleStatus(s) {
  if (s === "Complete") {
    return (
      <StatusComp
        icon={<CompleteStatusSvg />}
        status={s}
        color="rgba(4, 122, 58, 1)"
      />
    );
  } else if (s === "Pending") {
    return (
      <StatusComp icon={<PendingStatusSvg />} status={s} color={"#DDAF0A"} />
    );
  } else if (s === "Cancelled") {
    return (
      <StatusComp icon={<CancelStatusSvg />} status={s} color={"#DD0000"} />
    );
  } else if (s === "In Progress" || s === "Confirm") {
    return (
      <StatusComp
        icon={<PendingStatusSvg />}
        status="In Progress"
        color={"#DDAF0A"}
      />
    );
  }
}
// function handleLetterCount(text, maxLength) {
//   if (text.length <= maxLength) {
//     return text;
//   }

//   return text.substring(0, maxLength) + ".....";
// }
