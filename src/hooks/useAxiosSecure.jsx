// import { useContext, useEffect } from "react";
// import { AuthContext } from "../providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import useAuth from "./useAuth";
import { useEffect } from "react";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
});
const useAxiosSecure = () => {
  //   const { logOut } = useContext(AuthContext);
  const { logOut } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    axiosSecure.interceptors.request.use((config) => {
      const token = localStorage.getItem("access-token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });

    axiosSecure.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (
          error.response &&
          (error.response.status === 401 || error.response.status === 403)
        ) {
          // Log out the user and redirect to the login page
          await logOut();
          navigate("/login");
        }
        return Promise.reject(error);
      }
    );
  }, [logOut, navigate]);

  return [axiosSecure];
};

export default useAxiosSecure;
