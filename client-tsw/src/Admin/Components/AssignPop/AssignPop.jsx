import React, { useEffect, useState } from "react";
import "./AssignPop.css";
import { useAuth } from "../../../context/AuthContext";
import { toast } from "react-toastify";
import useFetch from "../../../Hooks/useFetch";
import { assignToMechanicsService } from "../../../APIServices/Appointment/AppointmentService";
const AssignPop = ({ openPop, setPop, appointment }) => {
  const [auth] = useAuth();
  const { data } = useFetch("/auth/users/by/MECHANICS");
  const [users, setUsers] = useState([]);
  useEffect(() => {
    setUsers(data);
  }, [data]);
  const handleAssign = async (mechanicsId, appointmentId) => {
    // apppo repairId,assignerId, mechanicsId
    const details = {
      assignerId: auth?.user?._id,
      mechanicsId: mechanicsId,
      repairId: appointmentId,
    };
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
        <div className="assign-pop ">
          <div className="">
            <div className="text-end">
              <button
                onClick={() => setPop(false)}
                className="btn btn-secondary"
              >
                X
              </button>
            </div>

            <div className="popUp rounded bg-white  border  shaddow ">
              <h2 className="my-2 fw-bold mx-auto">All Mechanics</h2>
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">name</th>
                    <th scope="col">email</th>
                    <th scope="col">Status</th>
                    <th scope="col">Assign</th>
                  </tr>
                </thead>
                <tbody>
                  {Array.isArray(users)
                    ? users.map((item, key) => (
                        <tr key={item?._id}>
                          <td>{item?.name || item?.firstname}</td>
                          <td>{item.email}</td>
                          <td>{item?.status}</td>
                          <td>
                            <button
                              disabled={!item?.isEnable}
                              onClick={() =>
                                handleAssign(item?._id, appointment?._id)
                              }
                              className={`btn btn-${
                                !item?.isEnable ? "danger" : "primary"
                              }`}
                            >
                              Assign
                            </button>
                          </td>
                        </tr>
                      ))
                    : ""}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AssignPop;
