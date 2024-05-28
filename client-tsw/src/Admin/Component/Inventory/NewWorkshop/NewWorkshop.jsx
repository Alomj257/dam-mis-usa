import React, { useState } from "react";
import { BsX } from "react-icons/bs";
import "./NewWorkshop.css";
import { toast } from "react-toastify";
import { createWorkshop } from "../../../../APIServices/Workshop/WorkshopService";
const NewWorkshop = ({ openPop, setPop, onAdd }) => {
  const [workshop, setWorkshop] = useState(null);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setWorkshop({ ...workshop, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await createWorkshop(workshop);
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
                  Add New Workshop
                </div>
                <form
                  onSubmit={handleSubmit}
                  action=""
                  className="my-2 d-flex flex-column gap-3"
                >
                  <div className="d-flex flex-column gap-2">
                    <label htmlFor="workshop">Workshop</label>
                    <input
                      type="text"
                      id="workshop"
                      onChange={handleChange}
                      className="border border-2 rounded p-1"
                      name="workshop"
                      placeholder="Name"
                    />
                  </div>
                  <div className="d-flex flex-column gap-2">
                    <label htmlFor="location">Location</label>
                    <input
                      type="text"
                      id="location"
                      onChange={handleChange}
                      className="border border-2 rounded p-1"
                      name="location"
                      placeholder="Location"
                    />
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

export default NewWorkshop;
