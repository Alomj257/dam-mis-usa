import React, { useEffect, useState } from "react";
import PrevSvg from "../../../../assets/Appointment/PrevSvg";
import { Pagination } from "antd";
import NextSvg from "../../../../assets/Appointment/NextSvg";
import { MdOutlineAccessTime, MdOutlineCheckCircle } from "react-icons/md";
import { RxCrossCircled } from "react-icons/rx";
import { FaPlus } from "react-icons/fa6";
import "./TruckLocationTable.css";
import { Link, useNavigate } from "react-router-dom";
import useFetch from "../../../../Hooks/useFetch";
import Loader from "../../../../Utils/Loader";
import GetUserName from "../../../../Utils/GetUserName";
import ErrorCustom from "../../../../Utils/Error";

const TruckLocationTable = () => {
  const navigate = useNavigate();
  const { data, loading, error } = useFetch("/transport/");
  const [transport, setTransports] = useState([]);
  useEffect(() => {
    setTransports(data);
  }, [data]);
  return (
    <>
      <div className="text-end my-3">
        <Link
          to="/admin/truck-location/new-task"
          className="admin-new-task-btn"
        >
          <FaPlus /> <span>New Task</span>{" "}
        </Link>
      </div>
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
              <td className="px-3">Driver Name</td>
              <td>pick up</td>
              <td>drop off</td>
              <td>gain</td>
              <td>date</td>
              <td>status</td>
            </tr>
            {loading ? (
              <Loader />
            ) : error ? (
              <ErrorCustom name="Task" />
            ) : Array.isArray(transport) ? (
              transport?.map((item, index) => {
                return (
                  <tr
                    onClick={() =>
                      navigate("/admin/truck-location/detail", { state: item })
                    }
                    key={item?.status}
                  >
                    <td className="px-3">
                      <GetUserName id={item?.assingTo} />
                    </td>
                    <td className="">{item?.pickup}</td>
                    <td className="">{item?.dropoff}</td>
                    <td className="">{item?.gain}</td>
                    <td className="">{item?.date}</td>
                    <td className="">{getStatus(item?.status)}</td>
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

export default TruckLocationTable;

const getStatus = (status) => {
  switch (status) {
    case "pending":
      return (
        <div className="d-flex fw-semibold align-items-center gap-2 text-warning">
          {" "}
          <MdOutlineAccessTime /> <span>{status}</span>
        </div>
      );
    case "in transit":
      return (
        <div
          className="d-flex fw-semibold align-items-center gap-2"
          style={{ color: "#054857" }}
        >
          <MdOutlineAccessTime /> <span>{status}</span>
        </div>
      );
    case "completed":
      return (
        <div className="d-flex fw-semibold align-items-center gap-2 text-success">
          {" "}
          <MdOutlineCheckCircle /> <span>{status}</span>
        </div>
      );
    case "cancelled":
      return (
        <div className="d-flex fw-semibold align-items-center gap-2 text-danger">
          {" "}
          <RxCrossCircled /> <span>{status}</span>
        </div>
      );
    default:
      break;
  }
};
