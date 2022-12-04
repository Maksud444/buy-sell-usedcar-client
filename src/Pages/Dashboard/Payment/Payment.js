import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51M64tQB5VjjpsUtwW1l0opoIdgfB09PYkWlOoCtFrZ9EAMEjJSjsvqj32RmCvP6bHyLR1PCgZlIuBQh1uNzYXpYA00zPXITOik');

const Payment = () => {
    const order = useLoaderData();
    console.log(order)
    return (
    <div>
        <h2 className='text-4xl'>Payment for {order.title}</h2>
        <p className='text-xl text-green-400'>Please pay <strong>${order.resaleprice}</strong> for your product {order.categoryName}</p>
        <div className='w-96 my-12'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                        order={order}
                    />
                </Elements>
            </div>
    </div>
    );
};

export default Payment;