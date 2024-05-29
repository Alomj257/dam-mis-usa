import React, { useEffect, useState } from "react";
import useFetch from "../../../Hooks/useFetch";
import { toast } from "react-toastify";
import { userEnableService } from "../../../APIServices/Auth/AuthService";

const Users = () => {
  const { data, reFetch } = useFetch("/auth/users");
  const [users, setUsers] = useState([]);
  useEffect(() => {
    setUsers(data?.users);
  }, [data?.users]);
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
    <div className="users">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">name</th>
            <th scope="col">email</th>
            <th scope="col">Status</th>
            <th scope="col">Enable</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(users)
            ? users.map((item, key) => (
                <tr key={item?._id}>
                  <th scope="row">{key + 1}</th>
                  <td>{item?.name || item?.firstname}</td>
                  <td>{item.email}</td>
                  <td>{item?.isEnable ? "Active" : "Inactive"}</td>
                  <td>
                    <button
                      onClick={() => handleEnable(item?._id)}
                      disabled={item?.isEnable}
                      className={`btn btn-${
                        item?.isEnable ? "success" : "primary"
                      }`}
                    >
                      {item?.isEnable ? "Enabled" : "Enable"}
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

export default Users;
