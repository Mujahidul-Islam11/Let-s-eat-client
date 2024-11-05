import React from 'react';
import Breadcrumbs from '../../../UI/Breadcrumbs/Breadcrumbs';
import { NavLink } from 'react-router-dom';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const Manage = () => {
    const axiosSecure = useAxiosSecure();

    const { data: bookings = [], refetch } = useQuery({
        queryKey: ["booking"],
        queryFn: async () => {
            const res = await axiosSecure.get(`/bookings/admin`);
            return res.data;
        }
    })

    // Payments data API
    const { data: paymentData = [] } = useQuery({
        queryKey: ['paymentHistory'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments`)
            return res.data
        }
    })
    const bookingTableHead = (
        <>
            <th className="px-3 md:px-6 py-2 md:py-4 font-semibold text-gray-600 text-[16px] text-start">
            </th>
            <th className="px-3 md:px-6 py-2 md:py-4 font-semibold text-gray-600 text-[16px] text-start">
                Name
            </th>
            <th className="px-3 md:px-6 py-2 md:py-4 font-semibold text-gray-600 text-[16px] text-start">
                Email
            </th>
            <th className="px-3 md:px-6 py-2 md:py-4 font-semibold text-gray-600 text-[16px] text-start">
                Date
            </th>
            <th className="px-3 md:px-6 py-2 md:py-4 font-semibold text-gray-600 text-[16px] text-start">
                Time
            </th>
            <th className="px-3 md:px-6 py-2 md:py-4 font-semibold text-gray-600 text-[16px] text-start">
                Bill
            </th>
            <th className="px-3 md:px-6 py-2 md:py-4 font-semibold text-gray-600 text-[16px] text-start">
                Status
            </th>
        </>
    );
    const paymentTableHead = (
        <>
            <th className="px-3 md:px-6 py-2 md:py-4 text-start font-semibold text-gray-600 text-[16px]">
                #
            </th>
            <th className="px-3 md:px-6 py-2 md:py-4 text-start font-semibold text-gray-600 text-[16px] ">
                Email
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
        <div className='w-full h-full space-y-12'>
            <Breadcrumbs routeName={"Manage"} pageTitle={"Manage customers payment/booking status"} />
           {/* Bookings table */}
            <div className="overflow-x-auto">
                <table className="min-w-full border-collapse border mx-auto">
                    <thead className="bg-[#F2F2F2]">
                        <tr>{bookingTableHead}</tr>
                    </thead>
                    <tbody>
                        {bookings?.map((booking, index) => (
                            <tr key={index} className="border-t">
                                <td className="px-3 md:px-6 py-2 md:py-4">
                                    {index + 1}
                                </td>
                                <td className="px-3 md:px-6 py-2 md:py-4 text-gray-800 font-medium text-[16px]">
                                    {booking?.name}
                                </td>
                                <td className="px-3 md:px-6 py-2 md:py-4 text-gray-800 font-medium text-[16px]">
                                    {booking?.email}
                                </td>
                                <td className="px-3 md:px-6 py-2 md:py-4 text-sm text-gray-800 font-medium text-[16px]">
                                    {booking?.date}
                                </td>
                                <td className="px-3 md:px-6 py-2 md:py-4 text-sm text-gray-800 font-medium text-[16px]">
                                    {booking?.time}
                                </td>
                                <td className="px-3 md:px-6 py-2 md:py-4 text-gray-800 font-medium text-[16px]">
                                    ${booking?.bill}
                                </td>
                                <td className={`px-3 md:px-6 py-2 md:py-4 text-[16px] ${booking?.status === "pending" ? "text-yellow-500" : "text-green-500"}`}>
                                    <span className={`${booking?.status === "pending" && 'border border-yellow-500 py-1 px-2 rounded-full cursor-pointer'} `}>{booking?.status}..</span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {bookings.length === 0 && <div className="w-full px-8 py-12 border mt-6">
                    <h3 className="text-3xl text-center">Customers haven't created any bookings yet!</h3>
                </div>}
            </div>

            {/* Payments table */}
            <div className="overflow-x-auto">
                <table className="min-w-full border-collapse border mx-auto">
                    <thead className="bg-[#F2F2F2]">
                        <tr>{paymentTableHead}</tr>
                    </thead>
                    <tbody>
                        {paymentData?.map((data, index) => (
                            <tr key={index} className="border-t">
                                <td className="px-3 md:px-6 py-2 md:py-4 font-medium text-[16px] text-start">
                                    {index + 1}
                                </td>
                                <td className="px-3 md:px-6 py-2 md:py-4 text-gray-800 font-medium text-start text-[16px] ">
                                    {data?.email}
                                </td>
                                <td className="px-3 md:px-6 py-2 md:py-4 text-gray-800 font-medium text-start text-[16px] ">
                                    ${data?.price.toFixed(2)}
                                </td>
                                <td className="px-3 md:px-6 py-2 md:py-4 text-green-500 font-medium text-start text-[16px]">
                                    {data?.transactionId}
                                </td>
                                <td className={`px-3 md:px-6 py-2 md:py-4 text-[16px] ${data?.status === "pending" ? "text-yellow-500" : "text-green-500"}`}>
                                    <span className={`${data?.status === "pending" && 'border border-yellow-500 py-1 px-2 rounded-full cursor-pointer'} `}>{data?.status}..</span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Manage;