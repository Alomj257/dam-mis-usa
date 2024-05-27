import React, { useEffect, useState } from "react";
import useFetch from "../Hooks/useFetch";

const WorkshoName = ({ id }) => {
  const { data } = useFetch(`/workshop/${id}`);
  const [workshop, setWorkshop] = useState(data);
  useEffect(() => {
    setWorkshop(data);
  }, [data]);
  return <>{workshop?.workshop}</>;
};

export default WorkshoName;
