import React from 'react';
import Breadcrumbs from '../../../UI/Breadcrumbs/Breadcrumbs';
import { NavLink } from 'react-router-dom';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'sonner';

const Manage = () => {
    const axiosSecure = useAxiosSecure();
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
            <th className="px-3 md:px-6 py-2 md:py-4 font-semibold text-gray-600 text-[16px] text-start">
                Action
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
            <th className="px-3 md:px-6 py-2 md:py-4 text-start font-semibold text-gray-600 text-[16px]">
                Action
            </th>
        </>
    );

    // Bookings data
    const { data: bookings = [], refetch: refetchBookings } = useQuery({
        queryKey: ["booking"],
        queryFn: async () => {
            const res = await axiosSecure.get(`/bookings/admin`);
            return res.data;
        }
    })

    // Payments data 
    const { data: paymentData = [], refetch: refetchPayments } = useQuery({
        queryKey: ['paymentHistory'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments`)
            return res.data
        }
    })

    // api calls and operations
    const handleConfirmedStatus = (booking, index) => {
        toast.custom((t) => (
            <div className="shadow-xl p-4 rounded-md bg-white mb-8 space-y-4">
                <span className="flex justify-center border text-red-300 border-red-300 w-fit mx-auto text-3xl rounded-full p-3">
                    <ion-icon name="alert-outline"></ion-icon>
                </span>
                <h1 className="text-center">
                Are you sure you want to mark {index} no. booking of {booking?.name} as Confirmed??
                </h1>
                <div className="flex justify-center gap-12">
                    <button
                        onClick={() => {
                            toast.dismiss(t);
                        }}
                        className="text-sm md:text-[16px] bg-green-500 font-extralight py-2 px-5 rounded-full hover:bg-green-600 transition-all size-fit shadow-md text-white"
                    >
                        No
                    </button>
                    <button
                        onClick={() => {
                            toast.dismiss(t);
                            updateStatus();
                        }}
                        className="text-sm md:text-[16px] bg-red-500 font-extralight py-2 px-5 rounded-full hover:bg-red-600 transition-all size-fit shadow-md text-white"
                    >
                        Yes
                    </button>
                </div>
            </div>
        ));
        const updateStatus = ()=>{
            axiosSecure.patch(`/bookings/confirm/${booking._id}`)
            .then(res=>{
                toast.success(`${index} no. booking marked as confirm`);
                refetchBookings();
            })
        }
    }
    
    const handleCanceledStatus = (booking, index) => {
        toast.custom((t) => (
            <div className="shadow-xl p-4 rounded-md bg-white mb-8 space-y-4">
                <span className="flex justify-center border text-red-300 border-red-300 w-fit mx-auto text-3xl rounded-full p-3">
                    <ion-icon name="alert-outline"></ion-icon>
                </span>
                <h1 className="text-center">
                Are you sure you want to mark {index} no. booking of {booking?.name} as Canceled??
                </h1>
                <div className="flex justify-center gap-12">
                    <button
                        onClick={() => {
                            toast.dismiss(t);
                        }}
                        className="text-sm md:text-[16px] bg-green-500 font-extralight py-2 px-5 rounded-full hover:bg-green-600 transition-all size-fit shadow-md text-white"
                        >
                        No
                    </button>
                    <button
                        onClick={() => {
                            toast.dismiss(t);
                            updateStatus();
                        }}
                        className="text-sm md:text-[16px] bg-red-500 font-extralight py-2 px-5 rounded-full hover:bg-red-600 transition-all size-fit shadow-md text-white"
                        >
                        Yes
                    </button>
                </div>
            </div>
        ));
        const updateStatus = ()=>{
            axiosSecure.patch(`/bookings/cancel/${booking._id}`)
            .then(res=>{
                toast.success(`${index} no. booking marked as canceled`);
                refetchBookings();
            })
        }
    }
    
    const handlePaymentStatus = (booking, index) => {
        toast.custom((t) => (
            <div className="shadow-xl p-4 rounded-md bg-white mb-8 space-y-4">
                <span className="flex justify-center border text-red-300 border-red-300 w-fit mx-auto text-3xl rounded-full p-3">
                    <ion-icon name="alert-outline"></ion-icon>
                </span>
                <h1 className="text-center">
                Are you sure you want to mark {index} no. payment of {booking?.name} as Complete??
                </h1>
                <div className="flex justify-center gap-12">
                    <button
                        onClick={() => {
                            toast.dismiss(t);
                        }}
                        className="text-sm md:text-[16px] bg-green-500 font-extralight py-2 px-5 rounded-full hover:bg-green-600 transition-all size-fit shadow-md text-white"
                    >
                        No
                    </button>
                    <button
                        onClick={() => {
                            toast.dismiss(t);
                            updateStatus();
                        }}
                        className="text-sm md:text-[16px] bg-red-500 font-extralight py-2 px-5 rounded-full hover:bg-red-600 transition-all size-fit shadow-md text-white"
                    >
                        Yes
                    </button>
                </div>
            </div>
        ));
        const updateStatus = ()=>{
            axiosSecure.patch(`/payments/confirm/${booking._id}`)
            .then(res=>{
                toast.success(`${index} no. payment marked as complete`);
                refetchPayments();
            })
        }
    }

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
                                <td className={`px-3 md:px-6 py-2 md:py-4 text-[16px] ${booking?.status === "canceled" && "text-red-500"} ${booking?.status === "pending" ? "text-yellow-500" : "text-green-500"}`}>
                                    {booking?.status}..
                                </td>
                                <td className="px-3 md:px-6 py-2 md:py-4 text-gray-800 font-medium text-3xl text-center">
                                    <div className='flex gap-3'>
                                    <span onClick={()=> handleConfirmedStatus(booking, index+1)} className='cursor-pointer text-green-500'><ion-icon name="checkmark-circle-outline"></ion-icon></span>
                                    <span onClick={()=> handleCanceledStatus(booking, index+1)} className='cursor-pointer text-red-500'><ion-icon name="close-circle-outline"></ion-icon></span>
                                    </div>
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
                                    {data?.status}..
                                </td>
                                <td className="px-3 md:px-6 py-2 md:py-4 text-gray-800 font-medium text-3xl flex justify-center gap-4 items-center mt-2">
                                    <span onClick={()=> handlePaymentStatus(data, index+1)} className='cursor-pointer text-green-500'><ion-icon name="checkmark-circle-outline"></ion-icon></span>  
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