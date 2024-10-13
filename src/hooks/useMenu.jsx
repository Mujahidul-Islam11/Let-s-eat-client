import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import useAxiosSecure from "./useAxiosSecure";

const useMenu = () => {
  const axiosSecure = useAxiosSecure();
  const [loading, setLoading] = useState(true);

  const {data: menu=[]} = useQuery({
    queryKey: ["menu"],
    queryFn: async()=>{
      const res = await axiosSecure?.get("/menu");
      setLoading(false)
      return res.data;
    }
  })


  return [menu, loading, setLoading];
};

export default useMenu;
