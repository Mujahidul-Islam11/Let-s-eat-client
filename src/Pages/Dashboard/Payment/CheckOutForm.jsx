import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useContext, useEffect, useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { AuthContext } from '../../../provider/AuthProvider';
import useFavorites from '../../../hooks/useFavorites';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';

const CheckOutForm = () => {
    const [error, setError] = useState('');
    const stripe = useStripe();
    const elements = useElements();
    const [favItems] = useFavorites();
    const { user } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();
    const [clientSecret, setClientSecret] = useState('')
    const [transactionId, setTransactionId] = useState('')
    const totalPrice = favItems?.reduce((total, item) => total + item.price, 0);
    const navigate = useNavigate();

    // load payment intent
    useEffect(() => {
        if (totalPrice > 0) {
            axiosSecure.post("/create-payment-intent", { price: totalPrice })
                .then(res => {
                    setClientSecret(res.data.clientSecret);
                })
        }
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
            if (paymentIntent.status === "succeeded") {
                setTransactionId(paymentIntent.id)
                // send payment info to database
                const paymentInfo = {
                    email: user?.email,
                    transactionId: paymentIntent.id,
                    price: totalPrice,
                    date: new Date(),
                    favIds: favItems?.map(item => item._id),
                    status: "pending",
                }
                axiosSecure.post("/payments", paymentInfo)
                    .then(res => {
                        if (res.data.result.insertedId) {
                            toast.success("Payment successful");
                            navigate("/dashboard/paymentHistory")
                        }
                    })
                    .catch(err => {
                        console.log(err)
                    })
            }
        }
    }

    return (
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
            <button className='text-[16px] bg-yellow-400 font-extralight py-1 px-4 mt-4 rounded-full hover:bg-yellow-500 transition-all size-fit shadow-lg cursor-pointer flex justify-center text-black disabled:bg-[#D7D9DB] disabled:text-[#C9CCCD] disabled:cursor-not-allowed' type="submit" disabled={!stripe || !clientSecret}>
                Pay
            </button>
            <p className='text-red-600 text-sm mt-3'>{error}</p>
            {transactionId && <p className='text-green-600 text-sm mt-3'>Your transaction Id: {transactionId}</p>}
        </form>
    );
};

export default CheckOutForm;