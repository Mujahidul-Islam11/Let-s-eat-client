import React, { useState } from "react";
import Sidebar from "../SideBar/SideBar";
import DashNavbar from "../DashNavbar/DashNavbar";
import { Outlet } from "react-router-dom";
import { Toaster } from "sonner";

const Dashboard = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div
      className="bg-white text-gray-800 relative"
      onClick={() => setDrawerOpen(false)}
    >
      <Toaster richColors />
      <DashNavbar setDrawerOpen={setDrawerOpen} drawerOpen={drawerOpen} />

      {/* Drawer, Outlet container */}
      <div className="flex">
        <section className="hidden md:flex">
          <Sidebar />
        </section>

        <section className="flex md:hidden duration-300 absolute">
          {drawerOpen && <Sidebar />}
        </section>

        <section className="w-full h-full py-4 px-4 mx-auto flex justify-center items-center overflow-y-scroll no-scrollbar">
          <Outlet />
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
