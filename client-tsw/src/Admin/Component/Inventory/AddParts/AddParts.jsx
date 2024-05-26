import React, { useState } from "react";
import "./AddParts.css";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { newPartsService } from "../../../../APIServices/Workshop/Parts/PartService";

const AddParts = () => {
  const { state } = useLocation();
  const [part, setPart] = useState(null);
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPart({ ...part, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    part.workshopId = state?._id;
    try {
      const { data } = await newPartsService(part);
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
      <div className="admin-add-parts">
        <h3 className="my-4 fw-semibold text-muted">New Parts</h3>
        <form
          onSubmit={handleSubmit}
          action=""
          className="d-flex flex-column gap-3"
        >
          <div className="d-flex w-100 gap-3 align-items-center">
            <div className="d-flex flex-column gap-1 w-100">
              <label htmlFor="partName">Part Name</label>
              <input
                type="text"
                name="partName"
                onChange={handleChange}
                className="border border-2 rounded p-1 px-2"
                id="partName"
                placeholder="Part Name"
              />
            </div>
            <div className="d-flex flex-column gap-1 w-100">
              <label htmlFor="model">Model</label>
              <input
                className="border border-2 rounded p-1 px-2"
                id="model"
                name="model"
                onChange={handleChange}
                type="text"
                placeholder="Model Name"
              />
            </div>
          </div>
          <div className="d-flex gap-3 w-100 align-items-center">
            <div className="d-flex flex-column gap-1 w-100">
              <label htmlFor="price"> Price </label>
              <input
                className="border border-2 rounded p-1 px-2"
                type="number"
                name="price"
                onChange={handleChange}
                id="price"
                placeholder="Price Per Piece"
              />
            </div>
            <div className="d-flex flex-column gap-1 w-100">
              <label htmlFor="quantity"> Quantity</label>
              <input
                className="border border-2 rounded p-1 px-2"
                id="quantity"
                name="quantity"
                onChange={handleChange}
                type="number"
                placeholder="0"
              />
            </div>
          </div>

          <div className="d-flex justify-content-end gap-3 mt-5">
            <button
              type="button"
              className="admin-part-cancel"
              onClick={() => navigate(-1)}
            >
              Cancel
            </button>
            <button type="submit" className="admin-part-save">
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddParts;
