import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import AppointmentTable from "../../Components/AppointmentTable/AppointmentTable";
import useFetch from "../../../Hooks/useFetch";
import { useAuth } from "../../../context/AuthContext";
import Loader from "../../../Utils/Loader";
import ErrorCustom from "../../../Utils/Error";

const Confirm = () => {
  const [{ user }] = useAuth();
  const { data, error, loading } = useFetch(
    `/appointment/driver/status/${user?._id}/Confirm`
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
          <ErrorCustom name="Appointment " />
        ) : (
          <AppointmentTable data={appointment} />
        )}
      </div>
    </div>
  );
};
export default Confirm;
