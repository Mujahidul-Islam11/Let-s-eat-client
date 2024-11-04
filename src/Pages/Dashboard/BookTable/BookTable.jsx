import React from 'react';
import Breadcrumbs from '../../../UI/Breadcrumbs/Breadcrumbs';

const BookTable = () => {
    return (
        <div className='w-full h-full'>
          <Breadcrumbs routeName={"Reservation"} pageTitle={"Book A Table"}/>  
        </div>
    );
};

export default BookTable;