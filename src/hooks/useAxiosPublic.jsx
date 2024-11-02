import axios from "axios";

const axiosPublic = axios.create({
    baseURL: "https://let-s-eat-server-nu.vercel.app/"
})
const useAxiosPublic = () => {
    return axiosPublic
};

export default useAxiosPublic;