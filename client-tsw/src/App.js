import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Auth/Login/Login";
import Register from "./components/Auth/Register/Register";
import ForgetPass from "./components/Auth/FogetPassword/ForgetPass";
import OTPvalidation from "./components/Auth/OTPvalidation/OTPvalidation";
import ResetPass from "./components/Auth/ResetPass/ResetPass";
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
import MechanicsDashboard from "./Pages/Dashboard/MechanicsDashboard";
import TaskPendingPage from "./Pages/TaskAppointment/TaskPendingPage";
import TaskCompletePage from "./Pages/TaskAppointment/TaskCompletePage";
import TaskRejectPage from "./Pages/TaskAppointment/TaskRejectPage";
import TaskProgressPage from "./Pages/TaskAppointment/TaskProgressPage";
import AdminDashboard from "./Admin/Pages copy/Dashboard/Dashboard";
import UserPage from "./Admin/Pages copy/User/UserPage";
import AdminAppointmentPage from "./Admin/Pages copy/Appointments/AppointmentPage";
import AdminPendingPage from "./Admin/Pages copy/Appointments/Details/PendingPage";
import AdminCancelledPage from "./Admin/Pages copy/Appointments/Details/CancelledPage";
import AdminConfirmPage from "./Admin/Pages copy/Appointments/Details/ConfirmPage";
import AdminCompletePage from "./Admin/Pages copy/Appointments/Details/CompletePage";
import TruckLocationsPage from "./Admin/Pages copy/TruckLocation/TruckLocationsPage";
import NewTaskPage from "./Admin/Pages copy/TruckLocation/NewTaskPage";
import TruckLocationDetails from "./Admin/Pages copy/TruckLocation/TruckLocationDetails";
import InventoryPage from "./Admin/Pages copy/Inventory/InventoryPage";
import InventoryDetailsPage from "./Admin/Pages copy/Inventory/InventoryDetailsPage";
import AddPartsPage from "./Admin/Pages copy/Inventory/AddPartsPage";
import UpdatePartPage from "./Admin/Pages copy/Inventory/UpdatePartPage";
import NewWorkshopPage from "./Admin/Pages copy/Inventory/NewWorkshopPage";
import DriverTruckLocationsPage from "./Driver/Pages/TruckLocation/TruckLocationsPage";
import DriverTruckLocationDetails from "./Driver/Pages/TruckLocation/TruckLocationDetails";
import AcceptNewTaskPage from "./Driver/Pages/TruckLocation/NewTaskPage";
import AcceptFormPage from "./Driver/Pages/TruckLocation/AcceptFormPage";
import TrasitePage from "./Driver/Pages/TruckLocation/TrasitePage";
import TransitComplatePage from "./Driver/Pages/TruckLocation/ComplatePage";

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
            <Route path="locate-tasks" element={<DriverTruckLocationsPage />} />
            <Route
              path="locate-tasks/details"
              element={<DriverTruckLocationDetails />}
            />
            <Route path="locate-tasks/accept" element={<AcceptNewTaskPage />} />
            <Route
              path="locate-tasks/accept/transit"
              element={<AcceptFormPage />}
            />
            <Route path="locate-transit" element={<TrasitePage />} />
            <Route path="task-completed" element={<TransitComplatePage />} />
            <Route
              path="locate-transit/details"
              element={<DriverTruckLocationDetails />}
            />
          </Route>
          {/* Admin */}
          {/* <Route path="/admin/users" element={<UserPage />} /> */}
          {/* <Route path="/admin/appoiments" element={<AppoimentPage />} /> */}
          <Route path="/admin" element={<AdminDashboard />}>
            <Route path="users" element={<UserPage />} />
            <Route path="workshop" element={<InventoryPage />} />
            <Route path="workshop/new-workshop" element={<NewWorkshopPage />} />
            <Route path="workshop/details" element={<InventoryDetailsPage />} />
            <Route path="workshop/details/parts" element={<AddPartsPage />} />
            <Route
              path="workshop/details/parts/update"
              element={<UpdatePartPage />}
            />
            <Route path="appointments" element={<AdminAppointmentPage />} />
            <Route
              path="appointment/pending-appointment"
              element={<AdminPendingPage />}
            />
            <Route
              path="appointment/cancelled-appointment"
              element={<AdminCancelledPage />}
            />
            <Route
              path="appointment/confirm-appointment"
              element={<AdminConfirmPage />}
            />
            <Route
              path="appointment/complete-appointment"
              element={<AdminCompletePage />}
            />
            <Route path="truck-location" element={<TruckLocationsPage />} />
            <Route path="truck-location/new-task" element={<NewTaskPage />} />
            <Route
              path="truck-location/detail"
              element={<TruckLocationDetails />}
            />
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
          <Route path="/mechanic" element={<MechanicsDashboard />}>
            <Route path="Pending" element={<TaskPendingPage />} />
            <Route path="InProgress" element={<TaskProgressPage />} />
            <Route path="Rejected" element={<TaskRejectPage />} />
            <Route path="Completed" element={<TaskCompletePage />} />
          </Route>
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
