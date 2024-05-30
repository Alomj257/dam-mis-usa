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
import Axios from "../../../../APIServices/Axios";
import Loader from "../../../../Utils/Loader";
import ErrorCustom from "../../../../Utils/Error";
import GetUserName from "../../../../Utils/GetUserName";
import NewMaterial from "../NewMaterial/NewMaterial";

const MaterialTable = () => {
  const navigate = useNavigate();
  const [openPop, setOpenPop] = useState(false);
  const [materials, setMaterial] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [totalPage, setTotalPages] = useState(0);
  const getfield = async (page, query) => {
    setLoading(true);
    setError(null);
    try {
      const response = await Axios.get(`/material/`, {
        params: { page, query, limit: 10 },
      });
      console.log(response);
      setMaterial(response.data.materials);
      setTotalPages(response.data.totalPages);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    getfield();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const onAdd = () => {
    getfield();
  };
  const handlePage = (page) => {
    getfield(page);
  };
  return (
    <>
      <NewMaterial onAdd={onAdd} openPop={openPop} setPop={setOpenPop} />
      <div className="table_sec mt-3">
        <div className="d-flex justify-content-between align-items-center my-2 mb-4">
          <h3 className="text-muted"> Materials</h3>
          <button
            onClick={() => setOpenPop(true)}
            to="new-workshop"
            className="admin-new-task-btn mt-auto"
          >
            <FaPlus /> <span>New Material</span>{" "}
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
          {loading ? (
            <Loader />
          ) : error ? (
            <ErrorCustom name="Fields" />
          ) : (
            <table>
              <tr className="first_row text-uppercase">
                <td className="ps-3">Name</td>
                <td>Owner</td>
                <td>Stock</td>
                <td>status</td>
              </tr>
              {Array.isArray(materials)
                ? materials?.map((item, index) => {
                    return (
                      <tr
                        key={index}
                        onClick={() => navigate("details", { state: item })}
                      >
                        <td className=" ps-3">{item?.name}</td>
                        <td className="">
                          <GetUserName id={item?.owner} />
                        </td>
                        <td className="">
                          {item?.stock} {item?.stockType}
                        </td>
                        <td
                          className={
                            item?.stock ? "text-success" : "text-danger"
                          }
                        >
                          {item?.stock ? "Available" : "Out Of stock"}
                        </td>
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
                total={totalPage * 10}
                onChange={handlePage}
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

export default MaterialTable;

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