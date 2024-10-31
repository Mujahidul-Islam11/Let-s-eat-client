import React from 'react';
import Breadcrumbs from '../../../UI/Breadcrumbs/Breadcrumbs';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckOutForm from './CheckOutForm';

const Payment = () => {
    const stripePromise = loadStripe(import.meta.env.VITE_PUBLISHABLE_KEY);

    return (
        <div className='w-full h-full'>
            <Breadcrumbs routeName={"Payment"} pageTitle={"Make your payment"}/>
            <Elements stripe={stripePromise}>
                <CheckOutForm/>
            </Elements>
        </div>
    );
};

export default Payment;