import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import AppointmentTable from "../../Components/AppointmentTable/AppointmentTable";
import { useAuth } from "../../../context/AuthContext";
import Loader from "../../../Utils/Loader";
import ErrorCustom from "../../../Utils/Error";
import Axios from "../../../APIServices/Axios";

const Confirm = () => {
  const [{ user }] = useAuth();

  const [appointment, setAppointment] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [totalPage, setTotalPages] = useState(0);
  const getAppointment = async (page, query) => {
    setLoading(true);
    setError(null);
    try {
      const response = await Axios.get(
        `/appointment/driver/status/${user?._id}/Confirm`,
        {
          params: { page, query, limit: 10 },
        }
      );
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
    <div>
      <Navbar title="Pending Appointments" />

      <div className="my-4">
        {loading ? (
          <Loader />
        ) : error ? (
          <ErrorCustom name="Appointment " />
        ) : (
          <AppointmentTable
            handlePage={handlePage}
            totalPage={totalPage}
            data={appointment}
          />
        )}
      </div>
    </div>
  );
};
export default Confirm;
