import axios from "axios";

export default axios.create({
  baseURL: "https://patdoc.net/api/chat/v1",
  headers: {
    "Content-type": "application/json",
  },
});

axios.interceptors.request.use(
  (config) => {
    // config.headers["Authorization"] = `Bearer ${localStorage.getItem("access_token")}`;
    return config;
  },
  (error) => {
    console.log("error", error);

    return Promise.reject(error);
  }
);
