import Axios from "axios";
export const axios = Axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});
if (typeof window !== "undefined") {
  axios.interceptors.request.use(
    (request) => {
      const access = localStorage.getItem("access");
      request.headers.Authorization = `Bearer ${access}`;
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
      if (error.response.status === 503) {
        // store.dispatch(maintenanceStart());
      }
      if (error.response.status === 401) {
        const refresh = localStorage.getItem("refresh");
        if (refresh) {
          axios
            .post("/auth/refresh", {
              refresh,
            })
            .then((response) => {
              const access = response?.data.access;
              const refresh = response?.data.refresh;
              localStorage.setItem("access", access);
              localStorage.setItem("refresh", refresh);
              window.location.reload();
            })
            .catch(() => {
              localStorage.removeItem("access");
              localStorage.removeItem("refresh");
            });
        } else {
          localStorage.removeItem("access");
          localStorage.removeItem("refresh");
        }
        return;
      }
      return Promise.reject(error);
    }
  );
}