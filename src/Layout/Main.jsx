import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import Footer from '../Pages/Shared/Footer/Footer';

const Main = () => {
    const [openMenu, setOpenMenu] = useState(false);
    return (
        <div onClick={()=> setOpenMenu(false)} className='relative'>
            <Navbar openMenu={openMenu} setOpenMenu={setOpenMenu}></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;