import React from 'react';
import ContactInfo from '../ContactInfo/ContactInfo';
import Location from '../Location/Location';
import SectionBanner from '../../../UI/SectionBanner/SectionBanner';

const ContactUs = () => {
    return (
        <div className='text-black'>
            <SectionBanner title={"Contact Us"} pageName={"Contact"} url={'https://images.unsplash.com/photo-1505935428862-770b6f24f629?q=80&w=1467&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}></SectionBanner>
            <ContactInfo></ContactInfo>
            <Location></Location>
        </div>
    );
};

export default ContactUs;