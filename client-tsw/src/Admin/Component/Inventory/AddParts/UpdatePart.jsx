import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { updatePartsService } from "../../../../APIServices/Workshop/Parts/PartService";
import { toast } from "react-toastify";

const UpdatePart = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [part, setPart] = useState(state);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPart({ ...part, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await updatePartsService(part, state?._id);
      if (data?.message) {
        return toast.error(data?.message);
      }
      toast.success(data);
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message || error?.response?.data);
    }
  };
  console.log(state);
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
                value={part?.partName}
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
                value={part?.model}
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
                value={part?.price}
                id="price"
                placeholder="Price Per Piece"
              />
            </div>
            <div className="d-flex flex-column gap-1 w-100">
              <label htmlFor="quantity">Quantity</label>
              <input
                className="border border-2 rounded p-1 px-2"
                id="quantity"
                name="quantity"
                onChange={handleChange}
                value={part?.quantity}
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

export default UpdatePart;
