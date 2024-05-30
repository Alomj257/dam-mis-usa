import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import NewExpenditure from "../../Expenditure/NewExpenditure/NewExpenditure";

const Expenditure = () => {
  const [openPop, setOpenPop] = useState(false);

  return (
    <div>
      <NewExpenditure openPop={openPop} setPop={setOpenPop} />
      <div className="d-flex justify-content-between align-items-center my-2 mt-4 mb-4">
        <h3 className="text-muted"> Use/Expend Material</h3>
        <button
          onClick={() => setOpenPop(true)}
          className="admin-new-task-btn mt-auto"
        >
          <FaPlus /> <span>Add Expenditure</span>{" "}
        </button>
      </div>
      <div className="container w-100 ps-0 mx-0">
        <div className="row row-cols-md-4">
          <div className="d-flex align-items-center gap-3">
            <small className="fw-semibold"> Number of workers</small>:{" "}
            <small>5</small>
          </div>
          <div>
            <small className="fw-semibold"> Rolled Cost</small>:{" "}
            <small>$234</small>
          </div>
          <div>
            <small className="fw-semibold"> Fuel Cost</small>:{" "}
            <small>$434</small>
          </div>
          <div>
            <small className="fw-semibold"> Fuel Cost</small>:{" "}
            <small>$434</small>
          </div>
          {/* material cost */}
        </div>
      </div>
    </div>
  );
};

export default Expenditure;
