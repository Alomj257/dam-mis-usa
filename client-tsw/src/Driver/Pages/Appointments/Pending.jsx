import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import AppointmentTable from "../../Components/AppointmentTable/AppointmentTable";
import { useAuth } from "../../../context/AuthContext";
import useFetch from "../../../Hooks/useFetch";

const Pending = () => {
  const [auth] = useAuth();
  const { data } = useFetch(`/appointment/status/${auth?.user?._id}/Pending`);
  console.log(auth?.user?._id);
  const [appointment, setAppointment] = useState([]);
  useEffect(() => {
    setAppointment(data);
  }, [data]);
  return (
    <div>
      <Navbar title="Pending Appointments" />

      <div className="my-4">
        <AppointmentTable data={appointment} />
      </div>
    </div>
  );
};

export default Pending;
