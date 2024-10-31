import React from 'react';
import Breadcrumbs from '../../../UI/Breadcrumbs/Breadcrumbs';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const Payment = () => {
    const stripePromise = loadStripe('');

    return (
        <div className='w-full h-full'>
            <Breadcrumbs routeName={"Payment"} pageTitle={"Make your payment"}/>
            <Elements stripe={stripePromise}>

            </Elements>
        </div>
    );
};

export default Payment;