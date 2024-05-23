import React, { useEffect, useState } from "react";
import PrevSvg from "../../../assets/Appointment/PrevSvg";
import { Pagination } from "antd";
import NextSvg from "../../../assets/Appointment/NextSvg";
import CompleteStatusSvg from "../../../assets/Appointment/CompleteStatusSvg";
import CancelStatusSvg from "../../../assets/Appointment/CancelStatusSvg";
import PendingStatusSvg from "../../../assets/Appointment/PendingStatusSvg";
import ConfirmStatusSvg from "../../../assets/Appointment/ConfirmStatusSvg";
import { useNavigate } from "react-router-dom";
import { BsThreeDotsVertical, BsX } from "react-icons/bs";
import { FaUser } from "react-icons/fa6";
import useFetch from "../../../Hooks/useFetch";
import AssignPop from "../AssignPop/AssignPop";
const AppointmentTable = () => {
  const navigate = useNavigate();
  const [openOptionIndex, setOpenOptionIndex] = useState(false);
  const { data } = useFetch("/appointment/");
  const [appointment, setAppointment] = useState([]);
  const [openPop, setOpenPop] = useState(false);
  const [appoint, setAppoint] = useState(null);
  useEffect(() => {
    setAppointment(data);
  }, [data]);
  const handleOpen = (index) => {
    setOpenOptionIndex(index === openOptionIndex ? null : index);
  };
  const handleAssign = (item) => {
    setOpenPop(true);
    setAppoint(item);
  };

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
            <tr className="first_row text-uppercase">
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
              <td>Options</td>
            </tr>
            <AssignPop
              appointment={appoint}
              openPop={openPop}
              setPop={setOpenPop}
            />
            {Array.isArray(appointment)
              ? appointment?.map((item, index) => {
                  const status = haldleStatus(item?.status);
                  const href = `/admin/appointment/${item?.status?.toLowerCase()}-appointment`;
                  return (
                    <tr key={item?.status}>
                      <td
                        style={{
                          padding: "20px",
                          width: "40%",
                        }}
                        className="first_col"
                      >
                        <button
                          className="bg-transparent border-0"
                          onClick={() => navigate(href, { state: item })}
                          style={{ textDecoration: "none", color: "inherit" }}
                        >
                          {item?.description?.length > 47
                            ? item?.description?.slice(0, 44) + "...."
                            : item?.description}
                        </button>
                      </td>
                      <td className="rest_col">{item?.workshop}</td>
                      <td className="rest_col">{item?.location}</td>
                      <td className="rest_col">{item?.timeSlot}</td>
                      <td className="last_col">{status}</td>
                      <td className="last_col position-relative text-center">
                        {openOptionIndex === index ? (
                          <BsX size={30} onClick={() => handleOpen(index)} />
                        ) : (
                          <BsThreeDotsVertical
                            onClick={() => handleOpen(index)}
                            size={30}
                          />
                        )}
                        <ul
                          style={{ listStyle: "none", left: "-6rem" }}
                          className={`position-absolute bg-white shadow rounded px-0  inset-0 ${
                            openOptionIndex === index
                              ? "option-open"
                              : "option-close"
                          }`}
                        >
                          <li
                            onClick={() => handleAssign(item)}
                            style={{
                              cursor: item?.isEnable
                                ? "not-allowed"
                                : "pointer",
                            }}
                            className="px-3 align-items-center pe-5 gap-2 d-flex p-3"
                          >
                            <FaUser />{" "}
                            {item?.status !== "Pending"
                              ? " Assgined"
                              : " Assgin"}
                          </li>
                        </ul>
                      </td>
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

export default AppointmentTable;

export function haldleStatus(s) {
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
