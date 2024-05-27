import { Switch } from "antd";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { acceptTranpostService } from "../../../../APIServices/Transport/TransportService";
import { useAuth } from "../../../../context/AuthContext";
import { toast } from "react-toastify";

const AcceptFrom = () => {
  const { state } = useLocation();
  const [task, setTask] = useState(state);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };
  useEffect(() => {
    setTask(state);
  }, [state]);
  const navigate = useNavigate();
  const [locationEnabled, setLocationEnabled] = useState(false);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const handleLocationToggle = (checked) => {
    if (checked) {
      // Request to enable location services
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            console.log("Location enabled:", position);
            const { latitude, longitude } = position.coords;
            setLatitude(latitude);
            setLongitude(longitude);
            setLocationEnabled(true);
          },
          (error) => {
            console.error("Error enabling location:", error);
          }
        );
      } else {
      }
    } else {
      setLatitude(null);
      setLongitude(null);
      // Handle the case when the switch is turned off (if needed)
      setLocationEnabled(false);
    }
  };
  const [{ user }] = useAuth();
  const handleSubmit = async () => {
    let details = { longitude, latitude, driverId: user?._id };
    try {
      const { data } = await acceptTranpostService(details, state?._id);
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
    <>
      <div className="admin-newTask">
        <h3 className="my-4 fw-semibold text-muted">Task Details</h3>
        <div action="" className="d-flex flex-column gap-3">
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
          <div>
            <div>
              <span className="fw-semibold py-2">Live Location</span>
              <div className="d-flex align-items-center gap-2">
                {" "}
                <Switch
                  defaultChecked={locationEnabled}
                  onChange={handleLocationToggle}
                  id="enble-location"
                  size="small"
                />
                <label htmlFor="enble-location" className=" small text-muted">
                  Enable
                </label>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-end gap-3 mt-5">
            <button
              onClick={() => navigate(-1)}
              type="button"
              className="admin-task-cancel"
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              type="submit"
              className="admin-task-save"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AcceptFrom;
