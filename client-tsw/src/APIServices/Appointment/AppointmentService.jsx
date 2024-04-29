import Axios from "../Axios";

export const createAppointmentService = async (data) =>
  await Axios.post("/appointment/", data);
export const getAppintmetsByUserService = async (id) =>
  await Axios.get(`/appointment/driver/${id}`);
export const getTransportsByMechanicsService = async (id) =>
  await Axios.get(`/requests/assign//${id}`);
