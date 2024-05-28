import React, { useEffect, useState } from "react";
import NewTaskSvg from "../../../assets/Appointment/NewTask";
import Navbar from "../../Components/Navbar/Navbar";
import AppointmentTable from "../../Components/AppointmentTable/AppointmentTable";
import { Link } from "react-router-dom";
import useFetch from "../../../Hooks/useFetch";
import { useAuth } from "../../../context/AuthContext";
import Loader from "../../../Utils/Loader";
import ErrorCustom from "../../../Utils/Error";

const AppointmentPage = () => {
  const [{ user }] = useAuth();
  const { data, loading, error } = useFetch(`/appointment/driver/${user?._id}`);
  const [appointment, setAppointment] = useState([]);
  useEffect(() => {
    setAppointment(data);
  }, [data]);
  return (
    <>
      <Navbar title="Appointments" />
      <div className="d-flex justify-content-between align-items-center">
        <h4
          style={{
            fontWeigt: "500",
            fontSize: "2.1rem",
            color: "rgb(76, 76, 76)",
            marginTop: "15px",
          }}
        >
          All Appointments
        </h4>
        <Link
          to="/truck-driver/appointment/new-appointment"
          className="new-apoint-btn"
        >
          <NewTaskSvg color={"White"} />{" "}
          <span className="ms-1">New Appointment</span>
        </Link>
      </div>
      <div className="my-4">
        {loading ? (
          <Loader />
        ) : error ? (
          <ErrorCustom name="Appointments" />
        ) : (
          <AppointmentTable data={appointment} />
        )}
      </div>
    </>
  );
};

export default AppointmentPage;
