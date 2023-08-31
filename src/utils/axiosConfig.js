import axios from "axios";

const env = import.meta.env.NODE_ENV;

export const api = axios.create({
  baseURL:
    env === "production"
      ? "https://drmartensns-api.onrender.com"
      : "http://127.0.0.1:5000",
  headers: { "Content-Type": "application/json" },
});
