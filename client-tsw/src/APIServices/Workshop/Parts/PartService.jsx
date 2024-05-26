import Axios from "../../Axios";

export const newPartsService = async (data) =>
  await Axios.post("/parts/", data);
export const updatePartsService = async (data, id) =>
  await Axios.put(`/parts/${id}`, data);
