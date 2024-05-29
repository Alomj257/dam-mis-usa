import Axios from "../../Axios";

export const createFieldService = async (data) =>
  await Axios.post("/field/", data);
export const updateFieldService = async (data, id) =>
  await Axios.put(`/field/${id}`, data);
export const deleteFieldService = async (id) =>
  await Axios.delete(`/field/${id}`);
