import axios from 'axios';

export const baseURL = `${import.meta.env.VITE_API_URL}`;

const axiosInstance = axios.create({
  baseURL
});

axiosInstance.interceptors.response.use(
  (response) => {
    // Do something with response data
    return response;
  },
  (error) => {
    // Do something with response error
    if (error.response.status === 401) {
      localStorage.clear();
    }
    return Promise.reject(error);
  }
);

export {
  axiosInstance
};
