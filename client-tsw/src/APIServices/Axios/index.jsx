import axios from "axios";
const Axios = axios.create({ baseURL: "http://localhost:8000/api" });
export default Axios;
export const server = "http://localhost:8000";
