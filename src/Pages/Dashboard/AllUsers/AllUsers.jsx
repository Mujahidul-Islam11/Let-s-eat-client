import React from 'react';
import Breadcrumbs from '../../../UI/Breadcrumbs/Breadcrumbs';

const AllUsers = () => {
    return (
        <div className='w-full mx-12'>
            <Breadcrumbs routeName={"Users"} pageTitle={"All Users"}/>
        </div>
    );
};

export default AllUsers;