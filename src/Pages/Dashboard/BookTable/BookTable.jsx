import React, { useContext } from 'react';
import Breadcrumbs from '../../../UI/Breadcrumbs/Breadcrumbs';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { AuthContext } from '../../../provider/AuthProvider';

const BookTable = () => {
    const { user } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const axiosSecure = useAxiosSecure();

    const onSubmit = async (data) => {
        const [hour, minute] = data.time.split(":");
        const period = hour >= 12 ? "PM" : "AM";
        const adjustedHour = hour % 12 || 12; // Convert 0 to 12 for AM/PM
        const newTime = `${adjustedHour}:${minute} ${period}`;
        const guest = data?.guest.split(" ");
        const bill = 5 * Number(guest[0]);


        const tableInfo = {
            date: data.date,
            time: newTime, guest: data.guest,
            name: data.name,
            phone: data.phone,
            email: data.email,
            status: "pending",
            bill: bill
        }
        axiosSecure.post("/bookings", tableInfo)
            .then(res => {
                if (res.data.insertedId) {
                    toast.success(`Table booked for ${data.guest}s`);
                    navigate("/dashboard/bookings");
                }
            })
            .catch(err => {
                console.log(err);
                toast.error("Oops! something went wrong, try again later");
            })
    };

    return (
        <div className='w-full h-full'>
            <Breadcrumbs routeName={"Reservation"} pageTitle={"Book A Table"} />
            {/* Table booking form */}
            <form onSubmit={handleSubmit(onSubmit)} className="w-full md:w-3/4 mx-auto p-6 shadow-xl border bg-transparent rounded-xl">
                <div className='grid gird-cols-2 md:grid-cols-3 gap-3 space-y-4'>
                    <div className='w-full mt-4'>
                        <label className="block text-sm font-bold text-gray-900">Date*</label>
                        <input
                            type="date"
                            className="bg-transparent focus:outline-none focus:ring-1 focus:ring-yellow-400 mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm sm:text-sm"
                            placeholder="Enter date"

                            {...register("date", { required: true })}
                        />
                    </div>
                    <div className='w-full'>
                        <label className="block text-sm font-bold text-gray-900">Time*</label>
                        <input
                            type="time"
                            className="bg-transparent focus:outline-none focus:ring-1 focus:ring-yellow-400 mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm sm:text-sm"
                            placeholder="Enter a time"

                            {...register("time", { required: true })}
                        />
                    </div>

                    <div className='w-full'>
                        <label className="block text-sm font-bold text-gray-900">Guest*</label>
                        <select
                            className="bg-transparent focus:outline-none focus:ring-1 focus:ring-yellow-400 mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm sm:text-sm"
                            {...register("guest", { required: true })}
                        >
                            <option value="1 person">1 Person</option>
                            <option value="2 person">2 Person</option>
                            <option value="3 person">3 Person</option>
                            <option value="4 person">4 Person</option>
                            <option value="5 person">5 Person</option>
                            <option value="6 person">6 Person</option>
                        </select>
                    </div>


                    <div className='w-full'>
                        <label className="block text-sm font-bold text-gray-900">Full Name*</label>
                        <input
                            type="text"
                            className="bg-transparent focus:outline-none focus:ring-1 focus:ring-yellow-400 mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm sm:text-sm"
                            placeholder="Enter your full name"

                            {...register("name", { required: true })}
                        />
                    </div>

                    <div className='w-full'>
                        <label className="block text-sm font-bold text-gray-900">Phone*</label>
                        <input
                            type="text"
                            className="bg-transparent focus:outline-none focus:ring-1 focus:ring-yellow-400 mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm sm:text-sm"
                            placeholder="Enter your phone number"

                            {...register("phone", { required: true })}
                        />
                    </div>
                    <div className='w-full'>
                        <label className="block text-sm font-bold text-gray-900">Email*</label>
                        <input
                            type="email"
                            className="bg-transparent focus:outline-none focus:ring-1 focus:ring-yellow-400 mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm sm:text-sm"
                            placeholder="Enter your email address"
                            defaultValue={user?.email}
                            readOnly

                            {...register("email", { required: true })}
                        />
                    </div>


                    <div className="flex justify-end">
                        <input type='submit' value={'Book Table'} className="bg-yellow-400 cursor-pointer shadow-md font-extralight py-2 px-4 rounded-full hover:bg-yellow-500 transition-all size-fit flex justify-center mt-6 text-black">
                        </input>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default BookTable;