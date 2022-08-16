import axios from "axios";

const BASE_URL = "http://localhost:8000/api/";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
});

userRequest.interceptors.request.use(function (config) {
  let user = JSON.parse(
    JSON.parse(localStorage.getItem("persist:root")).user
  ).currentUser;
  if (user && user.access_token) {
    config.headers["Authorization"] = "Bearer " + user.access_token;
    return config;
  } else {
    return {};
  }
});
export default userRequest;
