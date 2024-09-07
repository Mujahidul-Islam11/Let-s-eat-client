import React from 'react';
import ContactBanner from '../ContactBanner/ContactBanner';
import ContactInfo from '../ContactInfo/ContactInfo';
import Location from '../Location/Location';

const ContactUs = () => {
    return (
        <div className=''>
            <ContactBanner></ContactBanner>
            <ContactInfo></ContactInfo>
            <Location></Location>
        </div>
    );
};

export default ContactUs;