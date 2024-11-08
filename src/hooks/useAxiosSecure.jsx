import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";


const axiosSecure = axios.create({
    baseURL: "https://let-s-eat-server-nu.vercel.app/"
    // baseURL: "http://localhost:5000/"
})
const useAxiosSecure = () => {
    const { logOut } = useContext(AuthContext);

    // pass token with each api call
    axiosSecure.interceptors.request.use((config) => {
        const token = localStorage.getItem("access-token");
        config.headers.authorization = `Bearer ${token}`;
        return config
    }, (err) => {
        return Promise.reject(err)
    })

    axiosSecure.interceptors.response.use((response) => {
        return response
    }, (err) => {
        const status = err.response.status;
        if (status === 401 || status === 403) {
            logOut()
        }
        return Promise.reject(err)
    })

    return axiosSecure
};

export default useAxiosSecure;