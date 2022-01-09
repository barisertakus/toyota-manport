import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
  // baseURL: "http://localhost:8080/api/"
});

const token = localStorage.getItem("token");

api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
export default api;
