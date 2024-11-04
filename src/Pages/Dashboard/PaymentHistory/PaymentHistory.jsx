import { useContext } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { AuthContext } from "../../../provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import Breadcrumbs from "../../../UI/Breadcrumbs/Breadcrumbs";


const PaymentHistory = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useContext(AuthContext);
    const { data: paymentData = [] } = useQuery({
        queryKey: ['paymentHistory', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${user?.email}`)
            return res.data
        }
    })

    const tableTitles = (
        <>
            <th className="px-3 md:px-6 py-2 md:py-4 text-start font-semibold text-gray-600 text-[16px]">
                #
            </th>
            <th className="px-3 md:px-6 py-2 md:py-4 text-start font-semibold text-gray-600 text-[16px] ">
                Price
            </th>
            <th className="px-3 md:px-6 py-2 md:py-4 text-start font-semibold text-gray-600 text-[16px]">
                Transaction Id
            </th>
            <th className="px-3 md:px-6 py-2 md:py-4 text-start font-semibold text-gray-600 text-[16px]">
                Status
            </th>
        </>
    );

    return (
        <div className="w-full h-full">
            <Breadcrumbs routeName={"Payment History"} pageTitle={"Your Payment History"} />
            <div className="overflow-x-auto">
                <table className="min-w-full border-collapse border mx-auto">
                    <thead className="bg-[#F2F2F2]">
                        <tr>{tableTitles}</tr>
                    </thead>
                    <tbody>
                        {paymentData?.map((data, index) => (
                            <tr key={index} className="border-t">
                                <td className="px-3 md:px-6 py-2 md:py-4 font-medium text-[16px] text-start">
                                    {index + 1}
                                </td>
                                <td className="px-3 md:px-6 py-2 md:py-4 text-gray-800 font-medium text-start text-[16px] ">
                                    ${data?.price.toFixed(2)}
                                </td>
                                <td className="px-3 md:px-6 py-2 md:py-4 text-green-500 font-medium text-start text-[16px]">
                                    {data?.transactionId}
                                </td>
                                <td className="px-3 md:px-6 py-2 md:py-4 text-start text-[16px]">
                                    <span className={`${data?.status === "pending" ? "text-yellow-500": "text-green-500"} text-start`}>{data?.status}..</span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;