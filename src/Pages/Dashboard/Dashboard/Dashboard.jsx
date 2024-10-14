import React from 'react';
import Sidebar from '../SideBar/SideBar';
import DashNavbar from '../DashNavbar/DashNavbar';

const Dashboard = () => {
    return (
        <div>
            <DashNavbar></DashNavbar>
            <Sidebar></Sidebar>
        </div>
    );
};

export default Dashboard;