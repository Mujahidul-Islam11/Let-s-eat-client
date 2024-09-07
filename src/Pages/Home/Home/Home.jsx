import React from 'react';
import Banner from '../Banner/Banner';
import AboutUs from '../AboutUs/AboutUs';
import Services from '../Services/Services';
import OurMenu from '../OurMenu/OurMenu';
import OurChefs from '../OurChefs/OurChefs';
import Newsletter from '../Newsletter/Newsletter';

const Home = () => {
    return (
        <div className=' w-full'>
           <Banner></Banner>
           <AboutUs></AboutUs>
           <Services></Services>
           <OurMenu></OurMenu>
           <OurChefs></OurChefs>
           <Newsletter></Newsletter>
        </div>
    );
};

export default Home;