import axios from "axios";
import useAuth from "../Auth/UseAuth/useAuth";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
});

function useAxiosSecure() {
  const {handleSignOut} = useAuth();
  const navigate = useNavigate();

  // Add a request interceptor
  axiosSecure.interceptors.request.use(
    function (config) {
      // add token in header
      const token = localStorage.getItem("access-token");
      config.headers.authorization = `Bearer ${token}`;
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  // Add a response interceptor
  axiosSecure.interceptors.response.use(
    function (response) {

      return response;

    },
     async (error) => {
      const status = error.response.status;
      if(status === 401 || status === 403){
        await handleSignOut();
        navigate('/sign-in')
      }
      return Promise.reject(error);
    }
  );

  return axiosSecure;
}

export default useAxiosSecure;
