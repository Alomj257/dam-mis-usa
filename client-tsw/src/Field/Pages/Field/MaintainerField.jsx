import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import FieldTable from "../../Components/Field/FieldTable/FieldTable";
import { useAuth } from "../../../context/AuthContext";

const MaintainerField = () => {
  const [{ user }] = useAuth();
  return (
    <div>
      <Navbar title="Maintaining Fields" />
      <FieldTable url={`maintainer/${user?._id}`} />
    </div>
  );
};

export default MaintainerField;
