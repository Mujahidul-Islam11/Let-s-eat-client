import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import StatsChart from "./StatsChart";

const AdminHome = () => {
    const { user } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();
    const { data: stats = [] } = useQuery({
        queryKey: ["stats"],
        queryFn: async () => {
            const res = await axiosSecure.get("/admin-stats");
            return res.data;
        }
    });

    return (
        <section className="w-full h-full">
            <h3 className="text-2xl mb-6">
                Hi, welcome back{" "}
                <span className="text-yellow-500">{user.displayName}</span>
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-3xl md:text-5xl bg-gradient-to-r from-violet-500 to-violet-300 text-white px-4 md:px-8 py-3 md:py-6 flex flex-col md:flex-row items-center gap-3 rounded-md">
                    <ion-icon name="wallet" style={{ fontSize: "2.5rem" }}></ion-icon>
                    <div className="text-center md:text-left">
                        <h3 className="text-xl md:text-2xl">${stats.revenue}</h3>
                        <h3 className="text-lg md:text-xl">Revenue</h3>
                    </div>
                </div>
                <div className="text-3xl md:text-5xl bg-gradient-to-r from-yellow-500 to-yellow-300 text-white px-4 md:px-8 py-3 md:py-6 flex flex-col md:flex-row items-center gap-3 rounded-md">
                    <ion-icon name="people" style={{ fontSize: "2.5rem" }}></ion-icon>
                    <div className="text-center md:text-left">
                        <h3 className="text-xl md:text-2xl">{stats.users}</h3>
                        <h3 className="text-lg md:text-xl">Customers</h3>
                    </div>
                </div>
                <div className="text-3xl md:text-5xl bg-gradient-to-r from-pink-500 to-pink-300 text-white px-4 md:px-8 py-3 md:py-6 flex flex-col md:flex-row items-center gap-3 rounded-md">
                    <ion-icon name="pizza" style={{ fontSize: "2.5rem" }}></ion-icon>
                    <div className="text-center md:text-left">
                        <h3 className="text-xl md:text-2xl">{stats.menuItems}</h3>
                        <h3 className="text-lg md:text-xl">Products</h3>
                    </div>
                </div>
                <div className="text-3xl md:text-5xl bg-gradient-to-r from-blue-500 to-blue-300 text-white px-4 md:px-8 py-3 md:py-6 flex flex-col md:flex-row items-center gap-3 rounded-md">
                    <ion-icon name="car" style={{ fontSize: "2.5rem" }}></ion-icon>
                    <div className="text-center md:text-left">
                        <h3 className="text-xl md:text-2xl">{stats.orders}</h3>
                        <h3 className="text-lg md:text-xl">Orders</h3>
                    </div>
                </div>
            </div>
            <StatsChart />
        </section>
    );
};

export default AdminHome;
