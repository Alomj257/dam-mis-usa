import React, { useEffect, useState } from "react";
import "./AssignPop.css";
import { useAuth } from "../../../context/AuthContext";
import { toast } from "react-toastify";
import useFetch from "../../../Hooks/useFetch";
import { assignToMechanicsService } from "../../../APIServices/Appointment/AppointmentService";
import { BsX } from "react-icons/bs";
const AssignPop = ({ openPop, setPop, appointment }) => {
  const [auth] = useAuth();
  const { data } = useFetch("/auth/users/by/MECHANICS");
  const getWorkshops = useFetch("/workshop/");
  const [users, setUsers] = useState([]);
  const [workshop, setWorkshop] = useState([]);
  const [details, setDetails] = useState(null);
  useEffect(() => {
    setUsers(data);
  }, [data]);
  useEffect(() => {
    setWorkshop(getWorkshops?.data);
  }, [getWorkshops?.data]);
  const handleChange = (e) => {
    const { value, name } = e.target;
    setDetails({ ...details, [name]: value });
  };
  const handleAssign = async (e) => {
    // apppo repairId,assignerId, mechanicsId
    e.preventDefault();
    details.assignerId = auth?.user?._id;
    details.repairId = appointment?._id;
    const { assignerId, repairId, mechanicsId } = details;
    console.log(details);
    if (!assignerId || !repairId || !mechanicsId) {
      console.log(details);
      return;
    }

    try {
      const { data } = await assignToMechanicsService(details);
      if (data?.message) {
        toast.error(data?.message);
        return;
      }
      toast.success(data);
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message);
    }
  };
  return (
    <>
      {openPop && (
        <div className="assign-pop">
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
                Assign Mechanic
              </div>
              <form
                action=""
                className="my-2 d-flex flex-column gap-3"
                onSubmit={handleAssign}
              >
                <div className="d-flex flex-column gap-2">
                  <label htmlFor="timeSlot">Time</label>
                  <input
                    type="text"
                    id="timeSlot"
                    onChange={handleChange}
                    className="border border-2 rounded p-1"
                    name="timeSlot"
                    placeholder="time slot"
                  />
                </div>
                <div className="d-flex flex-column gap-2">
                  <label htmlFor="workshop">Workshop</label>
                  <select
                    type="text"
                    onChange={handleChange}
                    className="border border-2 rounded p-1 placeholder1"
                    id="workshop"
                    name="workshopId"
                    placeholder="time slot"
                  >
                    <option value="">Select Workshop</option>
                    {workshop?.map((val, index) => (
                      <option key={index} value={val?._id}>
                        {val?.location}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="d-flex flex-column gap-2">
                  <label htmlFor="mechanic">Mechanic</label>
                  <select
                    type="text"
                    onChange={handleChange}
                    id="mechanics"
                    className="border border-2 rounded p-1 placeholder1"
                    name="mechanicsId"
                    placeholder="time slot"
                  >
                    <option value="">Select Mechanics</option>
                    {users?.map((val, key) => (
                      <option value={val?._id}>
                        {val?.name || val?.firstname}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="d-flex flex-column gap-2">
                  <label htmlFor="phone">Phone</label>
                  <input
                    onChange={handleChange}
                    type="text"
                    name="phone"
                    className="border border-2 rounded p-1"
                    placeholder="Enter Phone No."
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
      )}
    </>
  );
};

export default AssignPop;
