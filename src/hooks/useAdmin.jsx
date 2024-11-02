import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";


const useAdmin = () => {
    const axiosSecure = useAxiosSecure();
    const {user, loading} = useContext(AuthContext);
    
    const {data: isAdmin=[], isLoading: isAdminLoading} = useQuery({
        queryKey: [user?.email, "isAdmin"],
        enabled: !loading,
        queryFn: async()=>{
            const res = await axiosSecure.get(`/users/admin/${user?.email}`);
            return res.data?.admin;
        }
    })
    return [isAdmin, isAdminLoading];
};

export default useAdmin;