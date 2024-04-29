import Axios from "../Axios";

export const getTransportsByUserService = async (id) =>
  await Axios.get(`/transport/${id}`);
