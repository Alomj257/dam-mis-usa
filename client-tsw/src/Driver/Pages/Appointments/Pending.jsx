import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import AppointmentTable from "../../Components/AppointmentTable/AppointmentTable";
import { useAuth } from "../../../context/AuthContext";
import useFetch from "../../../Hooks/useFetch";
import Loader from "../../../Utils/Loader";
import ErrorCustom from "../../../Utils/Error";

const Pending = () => {
  const [{ user }] = useAuth();
  const { data, error, loading } = useFetch(
    `/appointment/driver/status/${user?._id}/Pending`
  );
  const [appointment, setAppointment] = useState([]);
  useEffect(() => {
    setAppointment(data);
  }, [data]);
  return (
    <div>
      <Navbar title="Pending Appointments" />

      <div className="my-4">
        {loading ? (
          <Loader />
        ) : error ? (
          <ErrorCustom name="Appointment pending" />
        ) : (
          <AppointmentTable data={appointment} />
        )}
      </div>
    </div>
  );
};

export default Pending;
