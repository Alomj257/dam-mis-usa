import Axios from "../../Axios";

export const createExpenditureService = async (data) =>
  await Axios.post("/expenditure/", data);
export const updateExpenditureService = async (data, id) =>
  await Axios.put(`/expenditure/${id}`, data);
export const deleteExpenditureService = async (id) =>
  await Axios.delete(`/expenditure/${id}`);
