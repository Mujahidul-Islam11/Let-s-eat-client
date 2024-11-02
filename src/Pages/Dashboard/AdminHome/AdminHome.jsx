import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const AdminHome = () => {
    const { user } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();
    const {data: stats=[]} = useQuery({
        queryKey: ["stats"],
        queryFn: async()=>{
            const res = await axiosSecure.get("/admin-stats");
            return res.data;
        }
    })
    return (
        <section className="w-full h-full">
            <h3 className="text-2xl mb-6">Hi, welcome back <span className="text-yellow-500">{user.displayName}</span></h3>
            <div className="flex justify-between items-center">
                <div className="text-5xl bg-gradient-to-r from-violet-500 to-violet-300 text-white px-8 py-6 flex items-center gap-3 rounded-md">
                    <ion-icon name="wallet"></ion-icon>
                    <span className="text-2xl">
                        <h3 className="text-2xl">${stats.revenue}</h3>
                        <h3 className="text-xl">Revenue</h3>
                    </span>
                </div>
                <div className="text-5xl bg-gradient-to-r from-yellow-500 to-yellow-300 text-white px-8 py-6 flex items-center gap-3 rounded-md">
                    <ion-icon name="people"></ion-icon>
                    <span className="text-2xl">
                        <h3 className="text-2xl">{stats.users}</h3>
                        <h3 className="text-xl">Customers</h3>
                    </span>
                </div>
                <div className="text-5xl bg-gradient-to-r from-pink-500 to-pink-300 text-white px-8 py-6 flex items-center gap-3 rounded-md">
                    <ion-icon name="pizza"></ion-icon>
                    <span className="text-2xl">
                        <h3 className="text-2xl">{stats.menuItems}</h3>
                        <h3 className="text-xl">Products</h3>
                    </span>
                </div>
                <div className="text-5xl bg-gradient-to-r from-blue-500 to-blue-300 text-white px-8 py-6 flex items-center gap-3 rounded-md">
                    <ion-icon name="car"></ion-icon>
                    <span>
                        <h3 className="text-2xl">{stats.orders}</h3>
                        <h3 className="text-xl">Orders</h3>
                    </span>
                </div>
            </div>
        </section>
    );
};

export default AdminHome;