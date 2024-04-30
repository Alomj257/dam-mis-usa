import React, { useEffect, useState } from "react";
import useFetch from "../../../Hooks/useFetch";
import AssignPop from "../AssignPop/AssignPop";

const AppoimentTable = () => {
  const { data } = useFetch("/appointment/");
  const [openPop, setOpenPop] = useState(false);
  const [appoint, setAppoint] = useState(null);
  const [appointment, setUsers] = useState([]);
  useEffect(() => {
    setUsers(data);
  }, [data]);
  const handleAssign = (item) => {
    setOpenPop(true);
    setAppoint(item);
  };
  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">S No</th>
            <th scope="col">Problem</th>
            <th scope="col">Truck Number</th>
            <th scope="col">Truck Model</th>
            <th scope="col">Status</th>
            <th scope="col">Enable</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(appointment)
            ? appointment.map((item, key) => (
                <tr key={item?._id}>
                  <th scope="row">{key + 1}</th>
                  <td>{item?.description?.slice(0, 40) + "..."}</td>
                  <td>{item.truckNumber}</td>
                  <td>{item.model}</td>
                  <td>{item?.status}</td>
                  <td>
                    <button
                      // onClick={() => handleEnable(item?._id)}
                      onClick={() => handleAssign(item)}
                      disabled={item?.status !== "Pending"}
                      className={`btn btn-${
                        item?.isEnable ? "success" : "primary"
                      }`}
                    >
                      {item?.status !== "Pending" ? " Assgined" : " Assgin"}
                    </button>
                    <AssignPop
                      appointment={appoint}
                      openPop={openPop}
                      setPop={setOpenPop}
                    />
                  </td>
                </tr>
              ))
            : ""}
        </tbody>
      </table>
    </div>
  );
};

export default AppoimentTable;
