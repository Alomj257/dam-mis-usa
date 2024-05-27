import React, { useEffect, useState } from "react";
import NotificationSvg from "../../assets/Appointment/NotificationSvg";
import Arrow from "../../assets/Appointment/Arrow";
import PrevSvg from "../../assets/Appointment/PrevSvg";
import NextSvg from "../../assets/Appointment/NextSvg";
import myData from "../../data";
import { Pagination } from "antd";

import CompleteStatusSvg from "../../assets/Appointment/CompleteStatusSvg";
import PendingStatusSvg from "../../assets/Appointment/PendingStatusSvg";
import InTransitSvg from "../../assets/Truck/InTransitSvg";
import { useAuth } from "../../context/AuthContext";
import useFetch from "../../Hooks/useFetch";
import Loader from "../../Utils/Loader";

function TruckLocateBody({ header, taskStatus }) {
  return (
    <div style={{ width: "90%", margin: "50px" }}>
      <Header header={header} />
      <TaskTable taskStatus={taskStatus} myData={myData} />
    </div>
  );
}

export default TruckLocateBody;

const DataFilter = (data, status) => {
  return data.filter((item) => item.status === status);
};

function haldleStatus(s) {
  if (s === "Completed") {
    return (
      <StatusComp
        icon={<CompleteStatusSvg />}
        status={s}
        color="rgba(4, 122, 58, 1)"
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
  } else if (s === "In Transit") {
    return <StatusComp icon={<InTransitSvg />} status={s} color={"#054857"} />;
  }
}

// for rounting problem
function removeSpaceBetweenWords(inputString) {
  return inputString?.replace(/(\S)\s+(\S)/g, "$1$2");
}

const TaskTable = ({ myData, taskStatus }) => {
  const statusFiltering = DataFilter(myData, taskStatus);
  const [task, setTask] = useState([]);
  const [{ user }] = useAuth();
  const { data, loading } = useFetch(`/transport/driver/${user?._id}`);
  console.log(data);
  useEffect(() => {
    setTask(data);
  }, [data]);
  return (
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
        {loading ? (
          <Loader />
        ) : (
          <table>
            <tr className="first_row">
              <td
                style={{
                  paddingLeft: "70px",
                }}
              >
                PICKUP
              </td>
              <td>DROPOFF</td>
              <td>GAIN</td>
              <td>DATE</td>
              <td>TIME</td>
              <td>STATUS</td>
            </tr>

            {Array.isArray(task)
              ? task?.map((item, index) => {
                  const status = haldleStatus(item?.status);
                  const href = `/truck-driver/truck-details`;

                  return (
                    <tr key={index}>
                      <a
                        href="/"
                        style={{
                          textDecoration: "none",
                          color: "inherit",
                          display: "block",
                          height: "57px",
                          paddingTop: "20px",
                        }}
                      >
                        <td
                          style={{
                            paddingLeft: "70px",
                          }}
                          className="rest_col"
                        >
                          {item?.pickup}
                        </td>
                      </a>
                      <td className="rest_col">{item?.dropoff}</td>
                      <td className="rest_col">{item?.gain}</td>
                      <td className="rest_col">{item?.date}</td>
                      <td className="rest_col">{item?.time}</td>
                      <td className="rest_col">{item?.status}</td>
                    </tr>
                  );
                })
              : ""}
          </table>
        )}
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
  );
};

const Header = ({ header, btn, fnc }) => {
  return (
    <div className="head_sec" style={{ marginBottom: "30px" }}>
      <div>
        <h2 style={{ fontWeigt: "500", fontSize: "2.7rem" }}>{header}</h2>
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
      </div>
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
const StatusComp = ({ icon, status, color }) => {
  return (
    <div style={{ display: "flex" }}>
      {icon}
      <span style={{ color: color, marginLeft: "7px" }}>{status}</span>
    </div>
  );
};
