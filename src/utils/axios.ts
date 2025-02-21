import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

const getToken = () => {
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  return user?.token || "";
};

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Accept": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
      config.headers["X-CSRF-TOKEN"] = token;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
