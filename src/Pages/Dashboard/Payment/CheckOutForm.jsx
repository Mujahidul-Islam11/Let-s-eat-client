import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useContext, useEffect, useState } from 'react';
import useMenu from '../../../hooks/useMenu';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { AuthContext } from '../../../provider/AuthProvider';

const CheckOutForm = () => {
    const [error, setError] = useState('');
    const stripe = useStripe();
    const elements = useElements();
    const [menu] = useMenu();
    const { user } = useContext(AuthContext);
    const totalPrice = menu?.reduce((total, item) => total + item.price, 0);
    const axiosSecure = useAxiosSecure();
    const [clientSecret, setClientSecret] = useState('')

    // load payment intent
    useEffect(() => {
        axiosSecure.post("/create-payment-intent", { price: totalPrice })
            .then(res => {
                setClientSecret(res.data.clientSecret);
            })
    }, [])



    // handle payment submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        })

        if (error) {
            console.log('[error]', error);
            setError(error.message);
        } else {
            console.log('[PaymentMethod]', paymentMethod);
            setError('')
        }

        // payment confirm 
        const { error: err, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    name: user?.displayName,
                    email: user?.email
                }
            },

        });
        if (err) {
            console.log(err)
        }
        else {
            console.log("intent", paymentIntent)
        }
    }

    return (
        <div className=''>
            <form className='w-1/2 mx-auto mt-24 border rounded-md px-8 py-12' onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='text-[16px] bg-yellow-400 font-extralight py-1 px-4 mt-4 rounded-full hover:bg-yellow-500 transition-all size-fit shadow-md flex justify-center text-black ' type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
                <p className='text-red-600 text-sm mt-2'>{error}</p>
            </form>
        </div>
    );
};

export default CheckOutForm;