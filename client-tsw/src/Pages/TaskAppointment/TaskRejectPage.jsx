import React, { useEffect, useState } from "react";
import TaskTable from "../../components/Mechanic/TaskTable_Mechanic";
import data from "../../MechanicData";
import useFetch from "../../Hooks/useFetch";
import { useAuth } from "../../context/AuthContext";

const TaskRejectPage = () => {
  const [auth] = useAuth();
  const { data } = useFetch(`/appointment/status/${auth?.user?._id}/Cancelled`);
  const [appointment, setAppointment] = useState([]);
  useEffect(() => {
    setAppointment(data);
  }, [data]);
  return (
    <>
      <TaskTable myData={appointment} taskStatus={"Cancelled"} />
    </>
  );
};

export default TaskRejectPage;
