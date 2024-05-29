import Axios from "../../Axios";

export const createMaterialService = async (data) =>
  await Axios.post("/material", data);
export const updateMaterialService = async (data, id) =>
  await Axios.put(`/material/${id}`, data);
export const deleteMaterialService = async (id) =>
  await Axios.delete(`/material/${id}`);
