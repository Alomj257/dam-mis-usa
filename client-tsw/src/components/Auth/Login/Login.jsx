import React from "react";
import { useState } from "react";
import Cookies from "js-cookie";
import "./Login.css";
import TruckLogo from "../../../assets/Auth/Truck_logo";
import GoogleIcon from "../../../assets/Auth/GoogleIcon";
import HideIcon from "../../../assets/Auth/HideIcon";
import ShowIcon from "../../../assets/Auth/ShowIcon";
import { toast } from "react-toastify";
import { useAuth } from "../../../context/AuthContext";
import { loginService } from "../../../APIServices/Auth/AuthService";
import { useNavigate } from "react-router-dom";
function Login() {
  const [type, setType] = useState(false);
  const [user, setUser] = useState(null);
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const handleClick = () => {
    setType(!type);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user?.rememberMe) {
      toast.error("Please select remember password for 30 days");
      return;
    }
    try {
      const { data } = await loginService(user);
      console.log(data);
      if (data?.message) {
        toast.error(data?.message);
      }
      setAuth({ ...auth, user: data?.user, token: data?.token });
      Cookies.set("auth", JSON.stringify(data));
      if (data.user.role === "DRIVER") {
        window.location.reload();
        navigate("/truck-driver/appointment");
      }
      if (data.user.role === "MECHANICS") {
        window.location.reload();
        navigate("/mechanic/Pending");
      }
      if (data.user.role === "ADMIN") {
        window.location.reload();
        navigate("/admin");
      }
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message);
    }
  };
  return (
    <div className="main_containeer login">
      <div className="form_side d-flex flex-column justify-content-center align-items-center">
        <div className="d-flex flex-column justify-content-center align-items-center ">
          <div className="logo_div d-flex align-items-center text_field">
            <TruckLogo />
            <h2 className="logo_title">DAM MIS</h2>
          </div>
          <div className="text_field d-flex flex-column align-items-center">
            <h2>Welcome Back!</h2>
            <h5>Glad to have you back</h5>
          </div>
          <form
            action=""
            className="d-flex flex-column"
            onSubmit={handleSubmit}
          >
            <div class="container">
              <div class="group">
                <input
                  type="email"
                  placeholder="Email"
                  className="from_input"
                  name="email"
                  onChange={handleChange}
                  required
                />
              </div>

              <div class="group d-flex align-items-center">
                <input
                  type={!type ? "password" : "text"}
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
            </div>
            <div
              className="check d-flex justify-content-between"
              style={{ padding: "29px" }}
            >
              <div className="d-flex align-items-center">
                <input
                  type="checkbox"
                  name="rememberMe"
                  onChange={handleChange}
                  id="remember"
                  className="check-box me-2"
                />
                <label
                  htmlFor="remember"
                  style={{
                    fontWeight: "500",
                    fontSize: "12px",
                  }}
                >
                  Remember me for 30 days
                </label>
              </div>
              <a href="/forget-password" className="forget">
                Forget Password
              </a>
            </div>

            <div className="btm_group d-flex flex-column p-3">
              <button type="submit" className="btn_ btn_si">
                Sign In
              </button>
              <button
                type="button"
                className="btn_ btn_g d-flex align-items-center justify-content-center"
              >
                <GoogleIcon />
                Sign In with Google
              </button>
            </div>
          </form>
          <span className="create">
            Create new account : <a href="/register">SIGN UP</a>
          </span>
        </div>
      </div>

      <div className="image_side img2"></div>
    </div>
  );
}

export default Login;
