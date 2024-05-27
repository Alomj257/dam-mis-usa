import React, { useEffect, useState } from "react";
import CompleteStatusSvg from "../../../../assets/Appointment/CompleteStatusSvg";
import CancelStatusSvg from "../../../../assets/Mechanic/Rejected";
import PendingStatusSvg from "../../../../assets/Appointment/PendingStatusSvg";
import ConfirmStatusSvg from "../../../../assets/Appointment/ConfirmStatusSvg";
import NextSvg from "../../../../assets/Appointment/NextSvg";
import { Pagination } from "antd";
import PrevSvg from "../../../../assets/Appointment/PrevSvg";
import { useNavigate } from "react-router-dom";
import { FaPlus } from "react-icons/fa6";
import NewWorkshop from "../NewWorkshop/NewWorkshop";
import useFetch from "../../../../Hooks/useFetch";
import Loader from "../../../../Utils/Loader";
import ErrorCustom from "../../../../Utils/Error";

const InventoryTable = () => {
  const navigate = useNavigate();
  const [openPop, setOpenPop] = useState(false);
  const [workshop, setWorkshop] = useState([]);
  const { data, reFetch, loading, error } = useFetch("/workshop/");
  useEffect(() => {
    setWorkshop(data);
  }, [data]);
  const onAdd = () => {
    reFetch();
  };
  return (
    <>
      <NewWorkshop onAdd={onAdd} openPop={openPop} setPop={setOpenPop} />
      <div className="table_sec mt-3">
        <div className="d-flex justify-content-between align-items-center my-2 mb-4">
          <h3 className="text-muted">Workshops</h3>
          <button
            onClick={() => setOpenPop(true)}
            to="new-workshop"
            className="admin-new-task-btn mt-auto"
          >
            <FaPlus /> <span>New Workshop</span>{" "}
          </button>
        </div>
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
              <td className="ps-3">Workshop</td>
              <td>Location</td>
              <td>Mechanics</td>
              <td>appointments</td>
              <td>earnings</td>
              <td>status</td>
            </tr>
            {loading ? (
              <Loader />
            ) : error ? (
              <ErrorCustom name="Workshop" />
            ) : Array.isArray(workshop) ? (
              workshop?.map((item, index) => {
                const status = haldleStatus(item?.status);

                return (
                  <tr
                    key={index}
                    onClick={() => navigate("details", { state: item })}
                  >
                    <td className=" ps-3">{item?.workshop}</td>
                    <td className="">{item?.location}</td>
                    <td className="ps-4">{item?.mechanics?.length}</td>
                    <td className="ps-4">{item?.appointments?.length}</td>
                    <td className="ps-4">${item?.earnings}</td>
                    <td className="">{status}</td>
                  </tr>
                );
              })
            ) : (
              ""
            )}
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

export default InventoryTable;

export function haldleStatus(s) {
  if (s === "availbale") {
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
