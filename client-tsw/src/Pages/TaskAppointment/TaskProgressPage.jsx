import React, { useEffect, useState } from "react";
import TaskTable from "../../components/Mechanic/TaskTable_Mechanic";
// import data from "../../MechanicData";
import { useAuth } from "../../context/AuthContext";
import Axios from "../../APIServices/Axios";
import ErrorCustom from "../../Utils/Error";
import Loader from "../../Utils/Loader";

const TaskProgressPage = () => {
  const [auth] = useAuth();
  // const { data } = useFetch(`/appointment/status/${auth?.user?._id}/Confirm`);
  const [appointment, setAppointment] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [totalPage, setTotalPages] = useState(0);
  const getAppointment = async (page, query) => {
    setLoading(true);
    setError(null);
    try {
      const response = await Axios.get(
        `/appointment/status/${auth?.user?._id}/Confirm`,
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
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <ErrorCustom />
      ) : (
        <TaskTable
          handlePage={handlePage}
          totalPage={totalPage}
          myData={appointment}
          taskStatus={"In Progress"}
        />
      )}
    </>
  );
};

export default TaskProgressPage;
