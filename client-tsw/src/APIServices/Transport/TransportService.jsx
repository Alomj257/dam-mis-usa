import Axios from "../Axios";

export const getTransportsByUserService = async (id) =>
  await Axios.get(`/transport/${id}`);

export const newTaskService = async (data) =>
  await Axios.post("/transport/", data);
export const cancelledTranpostService = async (data, id) =>
  await Axios.post(`/transport/reject/${id}`, data);

export const acceptTranpostService = async (data, id) =>
  await Axios.post(`/transport/accept/${id}`, data);

export const completeTaskService = async (id) =>
  await Axios.post(`/transport//complete/${id}`);
