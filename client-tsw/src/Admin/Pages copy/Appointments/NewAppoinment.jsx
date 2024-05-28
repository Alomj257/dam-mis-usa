import React from "react";
import BackPathHeader from "../../Component/BackPathHeader/BackPathHeader";
import HomeSvg from "../../../assets/Appointment/HomeSvg";
import Navbar from "../../Component/Navbar/Navbar";
import FormComp from "../../../components/Appointments/FormComp";

const NewAppoinment = () => {
  return (
    <div>
      <Navbar title="Book Appointments" />
      <BackPathHeader
        data={[
          { name: <HomeSvg />, path: "/truck-driver" },
          { name: "book appoinments", path: "/truck-driver/appointment" },
          {
            name: "New Appointment",
            path: "/truck-driver/appointment/new-appointment",
          },
        ]}
      />
      <FormComp />
    </div>
  );
};

export default NewAppoinment;
