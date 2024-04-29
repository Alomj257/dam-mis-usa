import React, { useState } from "react";
import HomeSvg from "../../assets/Appointment/HomeSvg";
import NotificationSvg from "../../assets/Appointment/NotificationSvg";
import NextIconSvg from "../../assets/Appointment/NextIconSvg";
import Arrow from "../../assets/Appointment/Arrow";
import NewTaskSvg from "../../assets/Appointment/NewTask";
import FormComp from "./FormComp";
import TableComp from "./TableComp";

const BodyComp = () => {
  const [btn, setbtn] = useState(true);

  const handleClick = () => {
    setbtn(!btn);
  };

  return (
    <>
      <div className="" style={{ width: "80%" }}>
        <div
          style={{
            paddingLeft: "50px",
            paddingRight: "50px",
            paddingTop: "20px",
          }}
        >
          <Header
            header={btn ? "Appointments" : "Book Appointments"}
            subheader={
              btn ? (
                <SubHeader />
              ) : (
                <SubHeader2
                  text1={"Book Appointments"}
                  text2={"New Appointments"}
                  width={"25.5rem"}
                />
              )
            }
            btn={btn}
            fnc={handleClick}
          />

          {btn ? <TableComp /> : <FormComp />}
        </div>
      </div>
    </>
  );
};

export default BodyComp;

const SubHeader = () => {
  return (
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
  );
};

const SubHeader2 = ({ text1, text2, width }) => {
  return (
    <div
      className="d-flex"
      style={{
        width: { width },
        justifyContent: "space-between",
        cursor: "pointer",
      }}
    >
      <HomeSvg />{" "}
      <span style={{ fontWeight: "500", fontSize: "18", color: "grey" }}>
        {text1}
      </span>
      <NextIconSvg />
      <span style={{ fontWeight: "500", fontSize: "18" }}>{text2}</span>
    </div>
  );
};

const Header = ({ header, subheader, btn, fnc }) => {
  return (
    <div
      className="head_sec"
      style={{ marginBottom: "30px", marginTop: "30px" }}
    >
      <div>
        <h2 style={{ fontWeigt: "500", fontSize: "2.7rem" }}>{header}</h2>
        {subheader}
      </div>

      <div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            padding: "5px",
          }}
        >
          <NotificationSvg />
          <ProfileImg />
          <Arrow />
        </div>

        {btn ? (
          <button className="new-apoint-btn" onClick={fnc}>
            <NewTaskSvg color={"White"} />{" "}
            <span className="ms-1">New Appointment</span>
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
const ProfileImg = ({ img }) => {
  return (
    <div
      style={{
        borderRadius: "50%",
        height: "40px",
        width: "40px",
        margin: "15px",
      }}
    >
      <img
        src={img}
        alt="img"
        srcset=""
        style={{
          borderRadius: "50%",
          height: "40px",
          width: "40px",
          border: "0.1px solid black",
        }}
      />
    </div>
  );
};
