import React, { useState } from "react";
import "./FieldDetails.css";
// import Parts from "../Parts/Parts";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { updateFieldService } from "../../../../APIServices/FIeld/Field/FieldService";
import GetUserName from "../../../../Utils/GetUserName";
const FieldDetails = () => {
  const { state } = useLocation();
  const [field, setField] = useState(state);
  const [isEdit, setEdit] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setField({ ...field, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(field);
    try {
      const { data } = await updateFieldService(field, state?._id);
      if (data?.messsage) {
        toast.error(data?.messsage);
        return;
      }
      toast.success(data);
      navigate(-1);
    } catch (error) {
      console.log(error);
      toast(error.response?.data?.messsage || error?.response?.data?.messsage);
    }
  };

  return (
    <div className="workshop-details mb-5">
      <div className="d-flex justify-content-between align-items-center mt-3">
        <h3 className="my-4 fw-semibold text-muted">Field Details</h3>
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
            <label htmlFor="location">Field Location</label>
            <input
              type="text"
              name="location"
              disabled={!isEdit}
              value={field?.location}
              onChange={handleChange}
              className="border border-2 rounded p-1 px-2"
              id="location"
              placeholder="Location"
            />
          </div>
          <div className="d-flex flex-column gap-1 w-100">
            <label htmlFor="area">Field Size</label>
            <input
              className="border border-2 rounded p-1 px-2"
              id="area"
              name="area"
              disabled={!isEdit}
              onChange={handleChange}
              value={field?.area}
              type="text"
              placeholder="Location"
            />
          </div>
        </div>
        <div className="d-flex gap-3 w-100 align-items-center">
          <div className="d-flex flex-column gap-1 w-100">
            <label htmlFor="owner">Owner</label>
            <div className="border border-2 rounded p-1 px-2 bg-light">
              <GetUserName id={field?.owner} />
            </div>
          </div>
          <div className="d-flex flex-column gap-1 w-100">
            <label htmlFor="maintainer"> Maintainer</label>
            <div className="border border-2 rounded p-1 px-2 bg-light">
              <GetUserName id={field?.maintainer} />
            </div>
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
      {/* <Parts workshop={state} /> */}
    </div>
  );
};

export default FieldDetails;
