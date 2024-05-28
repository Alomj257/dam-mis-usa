import React, { useState } from "react";
import "./WorkshopDetails.css";
import Parts from "../Parts/Parts";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { updateWorkshop } from "../../../../APIServices/Workshop/WorkshopService";
const WorkshopDetails = () => {
  const { state } = useLocation();
  const [workshop, setWorkshop] = useState(state);
  const [isEdit, setEdit] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setWorkshop({ ...workshop, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await updateWorkshop(workshop, state?._id);
      if (data?.messsage) {
        toast.error(data?.messsage);
        return;
      }
      toast.success(data);
    } catch (error) {
      console.log(error);
      toast(error.response?.data?.messsage || error?.response?.data?.messsage);
    }
  };

  return (
    <div className="workshop-details mb-5">
      <div className="d-flex justify-content-between align-items-center mt-3">
        <h3 className="my-4 fw-semibold text-muted">Workshop Details</h3>
        {!isEdit && (
          <button
            onClick={() => setEdit(true)}
            to="parts"
            className="admin-new-task-btn mt-auto"
          >
            <span>Edit</span>{" "}
          </button>
        )}
      </div>
      <form
        onSubmit={handleSubmit}
        action=""
        className="d-flex flex-column gap-3"
      >
        <div className="d-flex w-100 gap-3 align-items-center">
          <div className="d-flex flex-column gap-1 w-100">
            <label htmlFor="workshop">Workshop Name</label>
            <input
              type="text"
              name="workshop"
              disabled={!isEdit}
              value={workshop?.workshop}
              onChange={handleChange}
              className="border border-2 rounded p-1 px-2"
              id="workshop"
              placeholder="Location"
            />
          </div>
          <div className="d-flex flex-column gap-1 w-100">
            <label htmlFor="location">Location</label>
            <input
              className="border border-2 rounded p-1 px-2"
              id="location"
              name="location"
              disabled={!isEdit}
              onChange={handleChange}
              value={workshop?.location}
              type="text"
              placeholder="Location"
            />
          </div>
        </div>
        <div className="d-flex gap-3 w-100 align-items-center">
          <div className="d-flex flex-column gap-1 w-100">
            <label htmlFor="mechanics">Mechanics</label>
            <input
              className="border border-2 rounded p-1 px-2"
              type="text"
              disabled
              name="mechanics"
              value={workshop?.mechanics?.length}
              onChange={handleChange}
              id="mechanics"
              placeholder="Mechanics"
            />
          </div>
          <div className="d-flex flex-column gap-1 w-100">
            <label htmlFor="appoiments"> Appointments</label>
            <input
              className="border border-2 rounded p-1 px-2"
              type="text"
              name="appoiments"
              disabled
              value={workshop?.appointments?.length}
              onChange={handleChange}
              id="appoiments"
              placeholder="80"
            />
          </div>
        </div>
        <div className="d-flex gap-3 w-100 align-items-center">
          <div className="d-flex flex-column gap-1 w-100">
            <label htmlFor="cancelled"> Cancelled Appointments</label>
            <input
              className="border border-2 rounded p-1 px-2"
              type="text"
              disabled
              name="cancelled"
              onChange={handleChange}
              id="cancelled"
              placeholder="0"
            />
          </div>
          <div className="d-flex flex-column gap-1 w-100">
            <label htmlFor="earnings"> Earnings</label>
            <input
              className="border border-2 rounded p-1 px-2"
              type="text"
              name="earnings"
              disabled
              onChange={handleChange}
              id="earnings"
              placeholder="$4562"
            />
          </div>
        </div>
        {isEdit && (
          <div className="text-center">
            <button
              type="submit"
              onClick={() => setEdit(true)}
              to="parts"
              className="admin-new-task-btn mt-auto"
            >
              <span>Save</span>{" "}
            </button>
          </div>
        )}
      </form>
      <Parts workshop={state} />
    </div>
  );
};

export default WorkshopDetails;
