import React, { useEffect, useState } from "react";
import "./NewTask.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { newTaskService } from "../../../../APIServices/Transport/TransportService";
import useFetch from "../../../../Hooks/useFetch";
import { useAuth } from "../../../../context/AuthContext";

const NewTask = () => {
  const [users, setUsers] = useState([]);
  const { data } = useFetch("/auth/users/by/DRIVER");
  const [{ user }] = useAuth();
  const navigate = useNavigate();
  const [task, setTask] = useState(null);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      task.userId = user?._id;
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
  useEffect(() => {
    setUsers(data);
  }, [data]);
  return (
    <div className="admin-newTask">
      <h3 className="my-4 fw-semibold text-muted">Task Details</h3>
      <form
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
              placeholder="Location"
            />
          </div>
          <div className="d-flex flex-column gap-1 w-100">
            <label htmlFor="dropoff">Dropoff Location</label>
            <input
              className="border border-2 rounded p-1 px-2"
              id="dropoff"
              name="dropoff"
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
              onChange={handleChange}
              id="gain"
              placeholder="Gain"
            />
          </div>
          <div className="d-flex flex-column gap-1 w-100">
            <label htmlFor="assingTo"> Assigned To</label>
            <select
              className="border border-2 rounded p-1 px-2"
              id="assingTo"
              name="assingTo"
              onChange={handleChange}
              type="text"
              placeholder="Driver Name"
            >
              <option value="">Select Driver</option>
              {users?.map((val, index) => (
                <option className="text-capitalize" value={val?._id}>
                  {val?.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="d-flex gap-3 w-100 align-items-center">
          <div className="d-flex flex-column gap-1 w-100">
            <label htmlFor="truckNumber">Trcuk Number</label>
            <input
              className="border border-2 rounded p-1 px-2"
              type="text"
              name="truckNumber"
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
              type="date"
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
              onChange={handleChange}
              type="time"
              placeholder="time"
            />
          </div>
        </div>
        <div className="d-flex justify-content-end gap-3 mt-5">
          <button
            type="button"
            className="admin-task-cancel"
            onClick={() => navigate(-1)}
          >
            Cancel
          </button>
          <button type="submit" className="admin-task-save">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewTask;
