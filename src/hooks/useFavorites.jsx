import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useFavorites = () => {
const axiosSecure = useAxiosSecure();

// fetch data with tanStack query
  const { data: favItems = [] } = useQuery({
    queryKey: ["favData"],
    queryFn: async () => {
      const res = await axiosSecure.get("/favorites");
      return res.data;
    },
  });

  return [favItems];
};

export default useFavorites;
