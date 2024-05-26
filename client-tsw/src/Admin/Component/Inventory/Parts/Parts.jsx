import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import useFetch from "../../../../Hooks/useFetch";
import Loader from "../../../../Utils/Loader";

const Parts = ({ workshop }) => {
  const navigate = useNavigate();
  // /workshop/:workshopId
  const { data, loading, error } = useFetch(`/parts/workshop/${workshop?._id}`);
  const [parts, setparts] = useState([]);
  useEffect(() => {
    setparts(data);
  }, [data]);

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mt-3">
        <h3 className="my-3">Inventory Management</h3>
        <button
          onClick={() => navigate("parts", { state: workshop })}
          to="parts"
          className="admin-new-task-btn mt-auto"
        >
          <FaPlus /> <span>New Parts</span>{" "}
        </button>
      </div>
      <div className="container w-100">
        <div className="row row-cols-md-4 px-0">
          {loading ? (
            <Loader />
          ) : error ? (
            <div className="text-center text-danger">
              Parts Fetching error occured
            </div>
          ) : (
            parts.map((val, index) => (
              <div key={index}>
                <div
                  style={{ cursor: "pointer" }}
                  onClick={() => navigate("parts/update", { state: val })}
                  className="d-flex gap-2 p-3 ps-0 text-capitalize"
                >
                  <small className="fw-semibold">{val?.quantity}</small>
                  <small className="text-muted">{val?.partName}</small>{" "}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Parts;
