import React, { useState } from "react";

const TaskDetails = () => {
  const [task, setTask] = useState(null);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  return (
    <div className="admin-newTask mb-5">
      <h3 className="my-4 fw-semibold text-muted">Task Details</h3>
      <form action="" className="d-flex flex-column gap-3">
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
            <label htmlFor="assignTo"> Assigned To</label>
            <input
              className="border border-2 rounded p-1 px-2"
              id="assignTo"
              name="assignTo"
              onChange={handleChange}
              type="text"
              placeholder="Driver Name"
            />
          </div>
        </div>
        <div className="d-flex gap-3 w-100 align-items-center">
          <div className="d-flex flex-column gap-1 w-100">
            <label htmlFor="date">Date</label>
            <input
              className="border border-2 rounded p-1 px-2"
              type="date"
              name="data"
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
      </form>
      <h3 className="my-4 fw-semibold text-muted">Assign To</h3>
      <form action="" className="d-flex flex-column gap-3">
        <div className="d-flex gap-3 w-100 align-items-center">
          <div className="d-flex flex-column gap-1 w-100">
            <label htmlFor="driverName"> Driver Name</label>
            <input
              className="border border-2 rounded p-1 px-2"
              id="driverName"
              name="driverName"
              onChange={handleChange}
              type="text"
              placeholder="Name"
            />
          </div>
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
        </div>
        <div className="d-flex w-100 gap-3 align-items-center">
          <div className="d-flex flex-column gap-1 w-100">
            <label htmlFor="pickup">Trucking Co</label>
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
            <label htmlFor="dropoff">Weight</label>
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
            <label htmlFor="date">Date</label>
            <input
              className="border border-2 rounded p-1 px-2"
              type="date"
              name="data"
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
        <div style={{ width: "100%" }} className="rounded">
          <iframe
            className="rounded"
            width="100%"
            title="this"
            height="300"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          >
            <a href="https://www.gps.ie/">gps trackers</a>
          </iframe>
        </div>
      </form>
    </div>
  );
};

export default TaskDetails;
