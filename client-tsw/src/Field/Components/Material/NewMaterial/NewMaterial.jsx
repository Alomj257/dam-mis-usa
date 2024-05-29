import React, { useState } from "react";
import { BsX } from "react-icons/bs";
import "./NewMaterial.css";
import { toast } from "react-toastify";
import { createMaterialService } from "../../../../APIServices/FIeld/Field/MaterialService";
import { useAuth } from "../../../../context/AuthContext";
const NewMaterial = ({ openPop, setPop, onAdd }) => {
  const [material, setMaterial] = useState(null);
  const [{ user }] = useAuth();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setMaterial({ ...material, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    material.owner = user?._id;
    try {
      const { data } = await createMaterialService(material);
      if (data?.message) {
        toast.error(data?.message);
        return;
      }
      toast.success(data);
      onAdd();
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message || error?.response?.data);
    }
  };
  return (
    <>
      {openPop && (
        <div className="new-workshop">
          <div className="new-workshop-pop">
            <div className="popUp rounded col-5 mx-auto bg-white  border border-3  shaddow  p-4  ">
              <div className="text-end">
                <button
                  onClick={() => setPop(false)}
                  className="border-0 bg-transparent px-0 "
                >
                  <BsX size={40} />
                </button>
              </div>
              <div className="p-4 pt-0">
                <div
                  style={{ fontSize: "24px" }}
                  className="mb-2 fw-semibold text-center "
                >
                  Add New Material
                </div>
                <form
                  onSubmit={handleSubmit}
                  action=""
                  className="my-2 d-flex flex-column gap-3"
                >
                  <div className="d-flex flex-column gap-2">
                    <label htmlFor="name">Material Name*</label>
                    <input
                      type="text"
                      id="name"
                      required
                      onChange={handleChange}
                      className="border border-2 rounded p-1"
                      name="name"
                      placeholder="Name"
                    />
                  </div>
                  <div className="d-flex flex-column gap-2">
                    <label htmlFor="stock">Stock Size*</label>
                    <div className="d-flex gap-4">
                      {" "}
                      <input
                        type="text"
                        required
                        id="stock"
                        onChange={handleChange}
                        className="border border-2 w-100 rounded p-1"
                        name="stock"
                        placeholder="10"
                      />
                      <select
                        type="number"
                        required
                        id="stock"
                        onChange={handleChange}
                        className="border border-2 rounded p-1"
                        name="stockType"
                        placeholder="10"
                      >
                        <option value="">Select Stock type</option>
                        <option value="pieces">Piece</option>
                        <option value="kg">In Kg</option>
                        <option value="sacks">In Sack</option>
                      </select>
                    </div>
                  </div>
                  <div className="d-flex align-items-center justify-content-center">
                    <button type="submit" className="assign-submit-btn">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NewMaterial;
