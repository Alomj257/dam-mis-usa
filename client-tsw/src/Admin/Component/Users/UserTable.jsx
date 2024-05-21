import React, { useEffect, useState } from "react";
import ConfirmStatusSvg from "../../../assets/Appointment/ConfirmStatusSvg";
import PendingStatusSvg from "../../../assets/Appointment/PendingStatusSvg";
import CancelStatusSvg from "../../../assets/Mechanic/Rejected";
import CompleteStatusSvg from "../../../assets/Appointment/CompleteStatusSvg";
import NextSvg from "../../../assets/Appointment/NextSvg";
import { Pagination } from "antd";
import PrevSvg from "../../../assets/Appointment/PrevSvg";
import {
  BsBan,
  BsSearch,
  BsThreeDotsVertical,
  BsTrash,
  BsX,
} from "react-icons/bs";
import { FaUser } from "react-icons/fa6";
import useFetch from "../../../Hooks/useFetch";
import {
  deleteUserService,
  disableUserService,
  userEnableService,
} from "../../../APIServices/Auth/AuthService";
import { toast } from "react-toastify";
import "./User.css";
const UserTable = () => {
  const { data, reFetch } = useFetch("/auth/users");
  const [filtered, setFilter] = useState(data);
  const [openOptionIndex, setOpenOptionIndex] = useState(false);
  useEffect(() => {
    setFilter(data);
  }, [data]);
  const handleChange = (e) => {
    const value = e.target.value.trim();
    const filter = data?.filter(
      (user) =>
        user?.name?.toLowerCase().includes(value?.toLowerCase()) ||
        user?.email
          ?.toLowerCase()
          .includes(
            value?.toLowerCase() ||
              user?.role?.toLowerCase().includes(value?.toLowerCase())
          )
    );
    setFilter(filter);
  };
  const handleSelect = (e) => {
    const value = e.target.value.trim();
    const filter = data?.filter((user) =>
      user?.role?.toLowerCase().includes(value?.toLowerCase())
    );
    setFilter(filter);
  };
  const handleEnable = async (user) => {
    try {
      if (user?.isEnable) {
        return;
      }
      const { data } = await userEnableService({ id: user?._id });
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
  const handleOpen = (index) => {
    setOpenOptionIndex(index === openOptionIndex ? null : index);
  };

  const hanldeDisableUser = async (user) => {
    try {
      if (!user?.isEnable) {
        return;
      }
      const { data } = await disableUserService({ id: user?._id });
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
  const handleDeleteUser = async (userId) => {
    try {
      const { data } = await deleteUserService(userId);
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
    <>
      <div className="d-flex admin-userTable-search justify-content-end my-4 gap-4">
        <div className="shadow d-flex align-items-center p-2 rounded-5 px-4">
          <label htmlFor="search">
            <BsSearch size={25} />
          </label>{" "}
          <input
            type="text"
            onChange={handleChange}
            style={{ outline: "none" }}
            className="w-100 border-0 fs-6 p-2 px-4"
            placeholder="Search"
          />
        </div>
        <div className=" d-flex align-items-center  border border-2 rounded-3 px-4">
          <select
            onChange={handleSelect}
            name="travide"
            id=""
            className="border-0 px-4 fs-6  text-muted"
          >
            <option value="DRIVER">Truck Driver</option>
            <option value="MECHANICS">Mechanics</option>
            <option value="ADMIN">Admin</option>
          </select>
        </div>
      </div>
      <div className="table_sec">
        <div
          style={{
            borderRadius: "8px",
            overflow: "hidden",
            border: "0.6px solid rgb(195, 195, 195)",
            height: "100%",
          }}
        >
          <table className="m-auto ">
            <tr className="first_row text-uppercase">
              <td className="px-3">name</td>
              <td>Email</td>
              <td>phone no.</td>
              <td>Role</td>
              <td>Action</td>
              <td>Options</td>
            </tr>

            {Array.isArray(filtered)
              ? filtered?.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td className=" px-3 text-capitalize">{item?.name}</td>
                      <td>{item?.email}</td>
                      <td>{item?.phone}</td>
                      <td>{item?.role}</td>
                      <td className="last_col">
                        {item?.isEnable ? "Enabled" : "Disabled"}
                      </td>
                      <td className="last_col position-relative text-center">
                        {openOptionIndex === index ? (
                          <BsX size={30} onClick={() => handleOpen(index)} />
                        ) : (
                          <BsThreeDotsVertical
                            onClick={() => handleOpen(index)}
                            size={30}
                          />
                        )}
                        <ul
                          style={{ listStyle: "none" }}
                          className={`position-absolute bg-white shadow rounded px-0  inset-0 ${
                            openOptionIndex === index
                              ? "option-open"
                              : "option-close"
                          }`}
                        >
                          <li
                            style={{
                              cursor: item?.isEnable
                                ? "not-allowed"
                                : "pointer",
                            }}
                            className="px-3 align-items-center pe-5 gap-2 d-flex p-3"
                            onClick={() => handleEnable(item)}
                          >
                            <FaUser /> Enable
                          </li>
                          <li
                            style={{
                              cursor: !item?.isEnable
                                ? "not-allowed"
                                : "pointer",
                            }}
                            onClick={() => hanldeDisableUser(item)}
                            className="px-3 align-items-center pe-5 gap-2 d-flex p-3"
                          >
                            <BsBan /> Disable
                          </li>
                          <li
                            onClick={() => handleDeleteUser(item?._id)}
                            className="text-danger px-3 align-items-center pe-5 gap-2 d-flex p-3"
                          >
                            <BsTrash /> Delete
                          </li>
                        </ul>
                      </td>
                    </tr>
                  );
                })
              : ""}
          </table>
          <div
            className="bottom_page_div"
            style={{
              display: "flex",
              padding: "20px",
              justifyContent: "space-between",
              fontWeight: "400",
              fontSize: "14px",
            }}
          >
            <button className="d-flex align-items-center">
              <PrevSvg /> Previous
            </button>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Pagination
                defaultCurrent={1}
                total={100}
                showSizeChanger={false}
                theme={{
                  token: {
                    colorBorder: "rgba(225, 242, 246, 1)",
                  },
                }}
              />
            </div>
            <button className="d-flex align-items-center">
              Next <NextSvg />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserTable;

export function haldleStatus(s) {
  if (s === "Complete") {
    return (
      <StatusComp
        icon={<CompleteStatusSvg />}
        status={s}
        color="rgba(4, 122, 58, 1)"
      />
    );
  } else if (s === "Cancelled") {
    return (
      <StatusComp
        icon={<CancelStatusSvg />}
        status={s}
        color={" rgba(221, 0, 0, 1)"}
      />
    );
  } else if (s === "Pending") {
    return (
      <StatusComp
        icon={<PendingStatusSvg />}
        status={s}
        color={"rgba(221, 175, 10, 1)"}
      />
    );
  } else if (s === "Confirm") {
    return (
      <StatusComp
        icon={<ConfirmStatusSvg />}
        status={s}
        color={"rgba(4, 122, 58, 1)"}
      />
    );
  } else return "Enable";
}
const StatusComp = ({ icon, status, color }) => {
  return (
    <div style={{ display: "flex" }}>
      {icon}
      <span style={{ color: color, marginLeft: "7px" }}>{status}</span>
    </div>
  );
};
