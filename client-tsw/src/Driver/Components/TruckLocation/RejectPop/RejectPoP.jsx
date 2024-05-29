import React, { useState } from "react";
import { BsX } from "react-icons/bs";
import "./RejectPoP.css";
import { toast } from "react-toastify";
import { cancelledTranpostService } from "../../../../APIServices/Transport/TransportService";
import { useAuth } from "../../../../context/AuthContext";
import { useNavigate } from "react-router-dom";
const RejectPop = ({ openPop, setPop, task }) => {
  let [workshop, setWorkshop] = useState(null);
  const [{ user }] = useAuth();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setWorkshop({ ...workshop, [name]: value });
  };
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    workshop.driverId = user?._id;
    try {
      const { data } = await cancelledTranpostService(workshop, task?._id);
      if (data?.message) {
        toast.error(data?.message);
        return;
      }
      toast.success(data);
      navigate("/truck-driver/locate-tasks");
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
                  className="mb-2 fw-semibold text-center text-capitalize "
                >
                  Reason for reject
                </div>
                <form
                  onSubmit={handleSubmit}
                  action=""
                  className="my-2 d-flex flex-column gap-3"
                >
                  <div className="d-flex flex-column gap-2">
                    <label htmlFor="reason">Reason*</label>
                    <textarea
                      type="text"
                      id="reason"
                      style={{ outline: "none" }}
                      onChange={handleChange}
                      className="border border-2 rounded p-1"
                      name="reason"
                      placeholder="Name"
                      rows={5}
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

export default RejectPop;
