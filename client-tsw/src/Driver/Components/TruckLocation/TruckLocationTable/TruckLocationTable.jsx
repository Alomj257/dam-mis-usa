import React, { useEffect, useState } from "react";
import PrevSvg from "../../../../assets/Appointment/PrevSvg";
import { Pagination } from "antd";
import NextSvg from "../../../../assets/Appointment/NextSvg";
import { MdOutlineAccessTime, MdOutlineCheckCircle } from "react-icons/md";
import { RxCrossCircled } from "react-icons/rx";
import "./TruckLocationTable.css";
import { useNavigate } from "react-router-dom";
import Loader from "../../../../Utils/Loader";
import GetUserName from "../../../../Utils/GetUserName";
import ErrorCustom from "../../../../Utils/Error";
import { useAuth } from "../../../../context/AuthContext";
import Axios from "../../../../APIServices/Axios";

const TruckLocationTable = () => {
  const navigate = useNavigate();
  const [{ user }] = useAuth();
  // const { data, loading, error } = useFetch(`/transport/driver/${user?._id}`);
  const [transport, setTransports] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [totalPage, setTotalPages] = useState(0);
  const getTask = async (page, query) => {
    setLoading(true);
    setError(null);
    try {
      const response = await Axios.get(`/transport/driver/${user?._id}`, {
        params: { page, query, limit: 10 },
      });
      setTransports(response.data.transports);
      setTotalPages(response.data.totalPages);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    getTask();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handlePage = (page) => {
    getTask(page);
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
                      navigate("accept", {
                        state: item,
                      })
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
          style={{ color: "#054857" }}
          className="d-flex fw-semibold align-items-center gap-2 "
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
