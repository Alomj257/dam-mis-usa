import React, { useEffect, useState } from "react";
import "./NewTask.css";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { newTaskService } from "../../../../APIServices/Transport/TransportService";
import RejectPop from "../RejectPop/RejectPoP";

const NewTask = () => {
  const [openPop, setOpenPop] = useState(false);
  const { state } = useLocation();
  const navigate = useNavigate();
  const [task, setTask] = useState(state);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };
  useEffect(() => {
    setTask(state);
  }, [state]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await newTaskService(task);
      if (data?.message) {
        return toast.error(data?.message);
      }
      toast.success(data);
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message || error?.response?.data);
    }
  };
  return (
    <div className="admin-newTask">
      <RejectPop task={state} openPop={openPop} setPop={setOpenPop} />
      <h3 className="my-4 fw-semibold text-muted">Task Details</h3>
      <div
        action=""
        className="d-flex flex-column gap-3"
        onSubmit={handleSubmit}
      >
        <div className="d-flex w-100 gap-3 align-items-center">
          <div className="d-flex flex-column gap-1 w-100">
            <label htmlFor="pickup">Pickup Location</label>
            <input
              type="text"
              name="pickup"
              onChange={handleChange}
              className="border border-2 rounded p-1 px-2"
              id="pickup"
              disabled
              value={task?.pickup}
              placeholder="Location"
            />
          </div>
          <div className="d-flex flex-column gap-1 w-100">
            <label htmlFor="dropoff">Dropoff Location</label>
            <input
              className="border border-2 rounded p-1 px-2"
              id="dropoff"
              name="dropoff"
              disabled
              value={task?.dropoff}
              onChange={handleChange}
              type="text"
              placeholder="Location"
            />
          </div>
        </div>
        <div className="d-flex gap-3 w-100 align-items-center">
          <div className="d-flex flex-column gap-1 w-100">
            <label htmlFor="gain"> Gain</label>
            <input
              className="border border-2 rounded p-1 px-2"
              type="text"
              name="gain"
              disabled
              value={task?.gain}
              onChange={handleChange}
              id="gain"
              placeholder="Gain"
            />
          </div>
          <div className="d-flex flex-column gap-1 w-100">
            <label htmlFor="assingTo"> Assigned By</label>
            <input
              className="border border-2 rounded p-1 px-2"
              id="assingTo"
              name="assingTo"
              onChange={handleChange}
              disabled
              value={task?.userId}
              type="text"
              placeholder="Driver Name"
            />
          </div>
        </div>
        <div className="d-flex gap-3 w-100 align-items-center">
          <div className="d-flex flex-column gap-1 w-100">
            <label htmlFor="truckNumber">Trcuk Number</label>
            <input
              className="border border-2 rounded p-1 px-2"
              type="text"
              name="truckNumber"
              disabled
              value={task?.truckNumber}
              onChange={handleChange}
              id="truckNumber"
              placeholder="INAP8024"
            />
          </div>
          <div className="d-flex flex-column gap-1 w-100">
            <label htmlFor="phone"> Phone No.</label>
            <input
              className="border border-2 rounded p-1 px-2"
              id="phone"
              name="phone"
              disabled
              value={task?.phone}
              onChange={handleChange}
              type="text"
              placeholder="+91 965436789"
            />
          </div>
        </div>
        <div className="d-flex gap-3 w-100 align-items-center">
          <div className="d-flex flex-column gap-1 w-100">
            <label htmlFor="date">Date</label>
            <input
              className="border border-2 rounded p-1 px-2"
              type="text"
              disabled
              value={task?.date}
              name="date"
              onChange={handleChange}
              id="date"
              placeholder="Select Date"
            />
          </div>
          <div className="d-flex flex-column gap-1 w-100">
            <label htmlFor="time">Time </label>
            <input
              className="border border-2 rounded p-1 px-2"
              id="time"
              name="time"
              disabled
              value={task?.time}
              onChange={handleChange}
              type="text"
              placeholder="time"
            />
          </div>
        </div>
        <div className="d-flex justify-content-end gap-3 mt-5">
          <button
            type="button"
            className="admin-task-cancel"
            onClick={() => setOpenPop(true)}
          >
            Reject
          </button>
          <button
            onClick={() => navigate("transit", { state: state })}
            type="submit"
            className="admin-task-save"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewTask;
