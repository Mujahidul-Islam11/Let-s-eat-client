import { useContext } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { AuthContext } from "../../../provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";


const PaymentHistory = () => {
    const axiosSecure = useAxiosSecure();
    const {user} = useContext(AuthContext);
    const {data: paymentData=[]} = useQuery({
        queryKey: ['paymentHistory', user?.email],
        queryFn: async()=>{
            const res = await axiosSecure.get(`/payments/${user?.email}`)
            return res.data
        }
    })

    console.log(paymentData);
    return (
        <div className="w-full h-full">
            
        </div>
    );
};

export default PaymentHistory;