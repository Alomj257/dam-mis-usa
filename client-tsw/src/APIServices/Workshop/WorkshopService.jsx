import Axios from "../Axios";

export const createWorkshop = async (data) =>
  await Axios.post("/workshop", data);
export const updateWorkshop = async (data, id) =>
  await Axios.put(`/workshop/${id}`, data);
