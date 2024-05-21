import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Auth/Login/Login";
import Register from "./components/Auth/Register/Register";
import ForgetPass from "./components/Auth/FogetPassword/ForgetPass";
import OTPvalidation from "./components/Auth/OTPvalidation/OTPvalidation";
import ResetPass from "./components/Auth/ResetPass/ResetPass";
import TruckLocate from "./Driver/Truck/TruckLocate";
import TruckLocateTable from "./components/Truck/TruckLocateTable";
import TruckLocateDetails from "./components/Truck/TruckLocateDetails";
import Mechanic from "./Mechanic/Mechanic";
import TaskDetails from "./components/Mechanic/TaskDetails_Mechanics";
import CompletionForm from "./components/Mechanic/CompletionForm";
import { ToastContainer } from "react-toastify";
import Dashboard from "./Driver/Pages/Dashboard/Dashboard";
import AppointmentPage from "./Driver/Pages/Appointments/AppointmentPage";
import NewAppoinment from "./Driver/Pages/Appointments/NewAppoinment";
import PendingPage from "./Driver/Pages/Appointments/Details/PendingPage";
import CompletePage from "./Driver/Pages/Appointments/Details/CompletePage";
import ConfirmPage from "./Driver/Pages/Appointments/Details/ConfirmPage";
import CancelledPage from "./Driver/Pages/Appointments/Details/CancelledPage";
import Complete from "./Driver/Pages/Appointments/Complete";
import Pending from "./Driver/Pages/Appointments/Pending";
import Cancelled from "./Driver/Pages/Appointments/Cancelled";
import Confirm from "./Driver/Pages/Appointments/Confirm";
import AppoimentPage from "./Admin/Pages/Appointments/AppoimentPage";
import MechanicsDashboard from "./Pages/Dashboard/MechanicsDashboard";
import TaskPendingPage from "./Pages/TaskAppointment/TaskPendingPage";
import TaskCompletePage from "./Pages/TaskAppointment/TaskCompletePage";
import TaskRejectPage from "./Pages/TaskAppointment/TaskRejectPage";
import TaskProgressPage from "./Pages/TaskAppointment/TaskProgressPage";
import AdminDashboard from "./Admin/Pages copy/Dashboard/Dashboard";
import UserPage from "./Admin/Pages copy/User/UserPage";

/////////////////////////////////////////////

// home route => sign in page
//   /forget-password/otp    => otp validation page
//   /truck-driver/appointments    => All apointments, and rest is available in SideBar
//   /mechanic/Pending    => mechanic pending tasks , and rest is available in side bar
//   /mechanic-InProgress-CompletionForm   => compelation form for accepting in progress tasks in mechanic pages

/////////////////////////////////////////////

function App() {
  return (
    <>
      <ToastContainer />
      <Router>
        <Routes>
          {/* truck  Driver dashbaord */}
          <Route path="/truck-driver" element={<Dashboard />}>
            <Route path="appointment" element={<AppointmentPage />} />
            <Route
              path="appointment/new-appointment"
              element={<NewAppoinment />}
            />
            <Route
              path="appointment/pending-appointment"
              element={<PendingPage />}
            />
            <Route
              path="appointment/cancelled-appointment"
              element={<CancelledPage />}
            />
            <Route
              path="appointment/confirm-appointment"
              element={<ConfirmPage />}
            />
            <Route
              path="appointment/complete-appointment"
              element={<CompletePage />}
            />
            <Route path="appointment/complete" element={<Complete />} />
            <Route path="appointment/pending" element={<Pending />} />
            <Route path="appointment/cancelled" element={<Cancelled />} />
            <Route path="appointment/confirm" element={<Confirm />} />
          </Route>
          {/* Admin */}
          {/* <Route path="/admin/users" element={<UserPage />} /> */}
          <Route path="/admin/appoiments" element={<AppoimentPage />} />
          <Route path="/admin" element={<AdminDashboard />}>
            <Route path="users" element={<UserPage />} />
          </Route>
          {/* authentication */}
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forget-password" element={<ForgetPass />} />
          <Route path="/forget-password/otp" element={<OTPvalidation />} />
          <Route
            path="/forget-password/reset-password"
            element={<ResetPass />}
          />

          {/* Appointment Pages */}
          {/* <Route
            path="truck-driver/appointments/Pending"
            element={
              <AppointmentsPage
                page={
                  <ApointmentStatusPage
                    header={"Pending Appointments"}
                    allData={myCollection}
                    status={"Pending"}
                  />
                }
              />
            }
          />
          <Route
            path="truck-driver/appointments/Confirm"
            element={
              <AppointmentsPage
                page={
                  <ApointmentStatusPage
                    header={"Confirmed Appointments"}
                    allData={myCollection}
                    status={"Confirm"}
                  />
                }
              />
            }
          />
          <Route
            path="truck-driver/appointments/Cancelled"
            element={
              <AppointmentsPage
                page={
                  <ApointmentStatusPage
                    header={"Cancelled Appointments"}
                    allData={myCollection}
                    status={"Cancelled"}
                  />
                }
              />
            }
          />
          <Route
            path="truck-driver/appointments/Complete"
            element={
              <AppointmentsPage
                page={
                  <ApointmentStatusPage
                    header={"Completed Appointments"}
                    allData={myCollection}
                    status={"Complete"}
                  />
                }
              />
            }
          />
          <Route
            path="truck-driver/appointments/Complete-appointment"
            element={
              <AppointmentsPage
                page={<ApointStatusDetails status={"Completed"} />}
              />
            }
          />
          <Route
            path="truck-driver/appointments/Pending-appointment"
            element={
              <AppointmentsPage
                page={<ApointStatusDetails status={"Pending"} />}
              />
            }
          />
          <Route
            path="truck-driver/appointments/Cancelled-appointment"
            element={
              <AppointmentsPage
                page={<ApointStatusDetails status={"Cancelled"} />}
              />
            }
          />
          <Route
            path="truck-driver/appointments/Confirm-appointment"
            element={
              <AppointmentsPage
                page={<ApointStatusDetails status={"Confirm"} />}
              />
            }
          />
          <Route
            path="truck-driver/appointments"
            element={<AppointmentsPage page={<BodyComp />} />}
          /> */}
          {/* Truck Locate  */}
          <Route
            path="/truck-driver/truck-Pending"
            element={
              <TruckLocate
                page={
                  <TruckLocateTable
                    header={"New Tasks"}
                    taskStatus={"Pending"}
                  />
                }
              />
            }
          />
          <Route
            path="/truck-driver/truck-intransit"
            element={
              <TruckLocate
                page={
                  <TruckLocateTable
                    header={"In Transit"}
                    taskStatus={"In Transit"}
                  />
                }
              />
            }
          />
          <Route
            path="/truck-driver/truck-Completed"
            element={
              <TruckLocate
                page={
                  <TruckLocateTable
                    header={"Completed Tasks"}
                    taskStatus={"Completed"}
                  />
                }
              />
            }
          />
          {/* ///////////////// */}
          <Route
            path="/truck-driver/truck-Pending-details"
            element={
              <TruckLocate page={<TruckLocateDetails status={"Pending"} />} />
            }
          />
          <Route
            path="/truck-driver/truck-InTransit-details"
            element={
              <TruckLocate
                page={<TruckLocateDetails status={"In Transit"} />}
              />
            }
          />
          <Route
            path="/truck-driver/truck-Completed-details"
            element={
              <TruckLocate page={<TruckLocateDetails status={"Completed"} />} />
            }
          />
          {/* Mechanics  */}
          {/* <Route
            path="/mechanic/Pending"
            element={
              <Mechanic
                page={<TaskTable myData={myData} taskStatus={"Pending"} />}
              />
            }
          /> */}
          <Route path="/mechanic" element={<MechanicsDashboard />}>
            <Route path="Pending" element={<TaskPendingPage />} />
            <Route path="InProgress" element={<TaskProgressPage />} />
            <Route path="Rejected" element={<TaskRejectPage />} />
            <Route path="Completed" element={<TaskCompletePage />} />
          </Route>
          {/* <Route
            path="/mechanic/Completed"
            element={
              <Mechanic
                page={<TaskTable myData={myData} taskStatus={"Completed"} />}
              />
            }
          />
          <Route
            path="/mechanic/InProgress"
            element={
              <Mechanic
                page={<TaskTable myData={myData} taskStatus={"In Progress"} />}
              />
            }
          />
          <Route
            path="/mechanic/Rejected"
            element={
              <Mechanic
                page={<TaskTable myData={myData} taskStatus={"Rejected"} />}
              />
            }
          /> */}
          <Route
            path="/mechanic/Cancelled-details"
            element={<Mechanic page={<TaskDetails status="Rejected" />} />}
          />
          <Route
            path="/mechanic/Pending-details"
            element={<Mechanic page={<TaskDetails status="Pending" />} />}
          />
          <Route
            path="/mechanic/Complete-details"
            element={<Mechanic page={<TaskDetails status="Completed" />} />}
          />
          <Route
            path="/mechanic/Confirm-details"
            element={<Mechanic page={<TaskDetails status="In Progress" />} />}
          />
          <Route
            path="/mechanic/InProgress-CompletionForm"
            element={<Mechanic page={<CompletionForm />} />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
