import Axios from "../Axios";

export const createAppointmentService = async (data) =>
  await Axios.post("/appointment/", data);
export const getAppintmetsByUserService = async (id) =>
  await Axios.get(`/appointment/driver/${id}`);
export const getTransportsByMechanicsService = async (id) =>
  await Axios.get(`/requests/assign/${id}`);
// assign to mech by admin
export const assignToMechanicsService = async (data) =>
  await Axios.post(`/appointment/requests/assign`, data);
export const updateAppointmentService = async (data, id) =>
  await Axios.put(`/appointment/${id}`, data);

// accept by mech
export const acceptRequestService = async (data) =>
  await Axios.post(`/appointment/requests/accept`, data);

// accept by mech
export const rejectRequestService = async (data) =>
  await Axios.post(`/appointment/requests/reject`, data);

export const completeAppointmentsService = async (data, id) =>
  await Axios.post(`/appointment/complete/${id}`, data);
