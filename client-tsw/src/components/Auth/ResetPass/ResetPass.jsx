import React, { useState } from "react";
import "./ResetPass.css";
import TruckLogo from "../../../assets/Auth/Truck_logo";
import Frame2 from "../../../assets/ResetPass/Frame2.png";
import HideIcon from "../../../assets/Auth/HideIcon";
import ShowIcon from "../../../assets/Auth/ShowIcon";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { resetPasswordService } from "../../../APIServices/Auth/AuthService";

function ForgetPass() {
  const [type, setType] = useState(false);
  const { state } = useLocation();
  const [typeCP, setTypeCP] = useState(false);
  const [details, setDetails] = useState(null);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails({ ...details, [name]: value });
  };

  const handleClick = () => {
    setType(!type);
  };
  const handleClickCP = () => {
    setTypeCP(!typeCP);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    details.email = state;
    try {
      const { data } = await resetPasswordService(details);
      if (data?.message) {
        toast.error(data?.message);
      }
      toast.success(data);
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <div className="main_containeer ">
      <div className="form_side d-flex flex-column justify-content-center align-items-center">
        <div className="form_containeer d-flex flex-column justify-content-center align-items-center ">
          <div className="logo_div d-flex align-items-center text_field">
            <TruckLogo />
            <h2 className="logo_title">DAM MIS</h2>
          </div>
          <div className="text_field d-flex flex-column align-items-center">
            <h2>Reset Your Password</h2>
            <h5 className="mt-3">
              Here’s a tip: Use a combination of numbers, uppercase,
              <br /> lowercase and special characters
            </h5>
          </div>
          <form
            action=""
            className="d-flex flex-column"
            onSubmit={handleSubmit}
          >
            <div className="container">
              <div className="group">
                <input
                  type="password"
                  placeholder="Password"
                  className="from_input"
                  name="password"
                  onChange={handleChange}
                  required
                />

                <span className="toggleIcon" onClick={handleClick}>
                  {!type ? <HideIcon /> : <ShowIcon />}
                </span>
              </div>
              <div className="group">
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="from_input"
                  name="cnfPassword"
                  onChange={handleChange}
                  required
                />
                <span className="toggleIcon" onClick={handleClickCP}>
                  {!typeCP ? <HideIcon /> : <ShowIcon />}
                </span>
              </div>
            </div>
            <div className="btn_group d-flex flex-column ps-3">
              <button
                className="btn_"
                style={{ fontWeight: "500px", fontSize: "20px" }}
              >
                Reset Password
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="image_side img4 d-flex">
        <img src={Frame2} alt="" srcset="" className="frame" />
      </div>
    </div>
  );
}

export default ForgetPass;
