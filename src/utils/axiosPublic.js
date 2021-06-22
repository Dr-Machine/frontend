import Axios from "axios";
export const axios = Axios.create({
  baseURL: `${process.env.REACT_APP_API_BASE_URL}`,
});
if (typeof window !== "undefined") {
  axios.interceptors.request.use(
    (request) => {
      const token = window.localStorage.getItem("access");
      request.headers.Authorization = `Bearer ${token ? token : ""}`;
      return request;
    },
    (error) => error
  );
  axios.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.response === undefined) {
        return Promise.reject(error);
      }
      return Promise.reject(error);
    }
  );
}
