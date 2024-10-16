import React, { useState } from "react";
import Sidebar from "../SideBar/SideBar";
import DashNavbar from "../DashNavbar/DashNavbar";

const Dashboard = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
  return (
    <div className="bg-white text-gray-800" onClick={()=> setDrawerOpen(false)}>
      <DashNavbar setDrawerOpen={setDrawerOpen} drawerOpen={drawerOpen}></DashNavbar>
      <div className="hidden md:flex">
      <Sidebar></Sidebar>
      </div>
      <div className="flex md:hidden duration-300">
      {drawerOpen && <Sidebar></Sidebar>}
      </div>
    </div>
  );
};

export default Dashboard;
