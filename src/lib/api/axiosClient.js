import axios from "axios";

const axiosClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:5050",
  withCredentials: true, // if you use sessions or cookies
  headers: {
    "Content-Type": "application/json",
  },
});

// Add interceptors here if needed
axiosClient.interceptors.response.use(
  res => res,
  err => {
    console.error("Axios Error:", err?.response || err);
    return Promise.reject(err);
  }
);

export default axiosClient;
