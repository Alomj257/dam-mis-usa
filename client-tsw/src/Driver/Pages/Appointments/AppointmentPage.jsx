import React, { useEffect, useState } from "react";
import NewTaskSvg from "../../../assets/Appointment/NewTask";
import Navbar from "../../Components/Navbar/Navbar";
import AppointmentTable from "../../Components/AppointmentTable/AppointmentTable";
import { Link } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";
import Loader from "../../../Utils/Loader";
import ErrorCustom from "../../../Utils/Error";
import Axios from "../../../APIServices/Axios";

const AppointmentPage = () => {
  const [{ user }] = useAuth();
  // const { data, loading, error } = useFetch(`/appointment/driver/${user?._id}`);
  const [appointment, setAppointment] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [totalPage, setTotalPages] = useState(0);
  const getAppointment = async (page, query) => {
    setLoading(true);
    setError(null);
    try {
      const response = await Axios.get(`/appointment/driver/${user?._id}`, {
        params: { page, query, limit: 10 },
      });
      setAppointment(response.data.appointments);
      setTotalPages(response.data.totalPages);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    getAppointment();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handlePage = (page) => {
    getAppointment(page);
  };
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
          <AppointmentTable
            handlePage={handlePage}
            totalPage={totalPage}
            data={appointment}
          />
        )}
      </div>
    </>
  );
};

export default AppointmentPage;
