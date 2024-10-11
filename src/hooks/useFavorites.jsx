import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";


const useFavorites = () => {
const axiosSecure = useAxiosSecure();
const {user} = useContext(AuthContext);

  const { data: favItems = [], refetch } = useQuery({
    queryKey: ["favData"],  
    queryFn: async () => {
      const res = await axiosSecure.get(`/favorites?email=${user?.email}`);
      return res.data;
    },
  });

  return [favItems, refetch];
};

export default useFavorites;
