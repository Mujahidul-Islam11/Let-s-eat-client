import React from 'react';
import Banner from '../Banner/Banner';
import AboutUs from '../AboutUs/AboutUs';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div className=' w-full'>
           <Banner></Banner>
           <AboutUs></AboutUs>
           <Services></Services>
        </div>
    );
};

export default Home;