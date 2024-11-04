import Breadcrumbs from '../../../UI/Breadcrumbs/Breadcrumbs';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { NavLink } from 'react-router-dom';
import useBookings from '../../../hooks/useBookings';
import { toast } from 'sonner';

const Bookings = () => {
    const axiosSecure = useAxiosSecure();
    const [bookings, refetch] = useBookings();

    const tableTitles = (
        <>
            <th className="px-3 md:px-6 py-2 md:py-4 font-semibold text-gray-600 text-[16px] text-start">
            </th>
            <th className="px-3 md:px-6 py-2 md:py-4 font-semibold text-gray-600 text-[16px] text-start">
                Name
            </th>
            <th className="px-3 md:px-6 py-2 md:py-4 font-semibold text-gray-600 text-[16px] text-start hidden md:block">
                Guest Numbers
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
    const handleDelete = (booking, index) => {
        toast.custom((t) => (
            <div className="shadow-xl p-4 rounded-md bg-white mb-8 space-y-4">
                <span className="flex justify-center border text-red-300 border-red-300 w-fit mx-auto text-3xl rounded-full p-3">
                    <ion-icon name="alert-outline"></ion-icon>
                </span>
                <h1 className="text-center">
                    Are you sure you want to delete {index} no. table??
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
                            deleteItem();
                        }}
                        className="text-sm md:text-[16px] bg-red-500 font-extralight py-2 px-5 rounded-full hover:bg-red-600 transition-all size-fit shadow-md text-white"
                    >
                        Yes
                    </button>
                </div>
            </div>
        ));

        const deleteItem = () => {
            axiosSecure.delete(`/bookings/${booking?._id}`)
            .then(res=>{
                console.log(res.data)
                if(res.data.deletedCount){
                    toast.success(`Table ${index} deleted successfully`);
                    refetch();
                }
            })
            .catch(err=>{
                console.log(err);
                toast.error("Oops! something went wrong, try again later.")
            })
        }
    }
    return (
        <div className='w-full h-full'>
            <Breadcrumbs routeName={"Bookings"} pageTitle={"Your bookings"} />
            <div className="overflow-x-auto">
                <table className="min-w-full border-collapse border mx-auto">
                    <thead className="bg-[#F2F2F2]">
                        <tr>{tableTitles}</tr>
                    </thead>
                    <tbody>
                        {bookings?.map((booking, index) => (
                            <tr key={index} className="border-t">
                                <td className="px-3 md:px-6 py-2 md:py-4">
                                    {index+1}
                                </td>
                                <td className="px-3 md:px-6 py-2 md:py-4 text-gray-800 font-medium text-[16px]">
                                    {booking?.name}
                                </td>
                                <td className="px-3 md:px-6 py-2 md:py-4 text-gray-800 font-medium text-[16px]">
                                    {booking?.guest}
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
                                    {booking?.status}..
                                </td>
                                <td className="px-3 md:px-6 py-2 md:py-4">
                                    <button
                                        onClick={() => handleDelete(booking, index+1)}
                                        className="text-2xl text-red-500 text-center mx-auto flex justify-center"
                                    >
                                        <ion-icon name="trash-outline"></ion-icon>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {bookings.length === 0 && <div className="w-full px-8 py-12 border mt-6">
                    <h3 className="text-3xl text-center">No Bookings Yet – Start Adding!</h3>
                    <NavLink to={"/dashboard/book"}>
                        <button className="bg-yellow-400 text-black font-extralight py-3 px-6 rounded-full hover:bg-yellow-500 transition-all size-fit shadow-md mx-auto flex justify-center mt-6">
                            Book A Table
                        </button>
                    </NavLink>
                </div>}
            </div>
        </div>
    );
};

export default Bookings;