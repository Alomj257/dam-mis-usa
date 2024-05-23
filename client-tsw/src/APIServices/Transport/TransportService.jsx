import Axios from "../Axios";

export const getTransportsByUserService = async (id) =>
  await Axios.get(`/transport/${id}`);

export const newTaskService = async (data) =>
  await Axios.post("/transport/", data);
