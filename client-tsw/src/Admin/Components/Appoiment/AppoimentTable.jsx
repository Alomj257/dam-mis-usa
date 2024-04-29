import React, { useEffect, useState } from "react";
import useFetch from "../../../Hooks/useFetch";
import { toast } from "react-toastify";
import { userEnableService } from "../../../APIServices/Auth/AuthService";

const AppoimentTable = () => {
  const { data, reFetch } = useFetch("/appointment/");
  const [appointment, setUsers] = useState([]);
  useEffect(() => {
    setUsers(data);
  }, [data]);
  const handleEnable = async (userId) => {
    try {
      const { data } = await userEnableService({ id: userId });
      if (data?.message) {
        toast.error(data?.message);
        return;
      }
      toast.success(data);
      reFetch();
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message);
    }
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
                      onClick={() => handleEnable(item?._id)}
                      disabled={item?.status !== "Pending"}
                      className={`btn btn-${
                        item?.isEnable ? "success" : "primary"
                      }`}
                    >
                      {item?.status !== "Pending" ? " Assgined" : " Assgin"}
                    </button>
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
