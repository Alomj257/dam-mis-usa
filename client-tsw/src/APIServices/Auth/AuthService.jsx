import Axios from "../Axios";

export const loginService = async (data) =>
  await Axios.post("/auth/login", data);
export const registerService = async (data) =>
  await Axios.post("/auth/register", data);

export const sendOtpService = async (data) =>
  await Axios.post("/auth/users/forget", data);

export const otpVerifyService = async (data) =>
  await Axios.post("/auth/users/verify", data);

export const resetPasswordService = async (data) =>
  await Axios.post("/auth/users/update/password", data);
export const userEnableService = async (data) =>
  await Axios.post(`/auth/users/enable`, data);
export const disableUserService = async (userId) =>
  await Axios.post(`/auth/users/disable`, userId);
export const deleteUserService = async (id) =>
  await Axios.delete(`/auth/users/${id}`);
