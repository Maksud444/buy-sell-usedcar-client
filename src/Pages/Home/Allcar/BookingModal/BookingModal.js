import React, { useContext } from 'react';
import { toast } from 'react-toastify';


import { AuthContext } from '../../../../context/AuthProvider';


const BookingModal = ({ bookingCar,setBookingCar }) => {
    const { title, originalprice, resaleprice,brand,location,condition,YearOfPurchase,details} = bookingCar;
    const { user } = useContext(AuthContext)

    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
    const handleBooking = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value
        const details = form.details.value;

        const booking = {
            name,
            title,
            brand,
            originalprice, 
            resaleprice,
            email,
            phone,
            location,
            date,
            condition,
            YearOfPurchase,
            details
        }

        console.log(booking)
        toast.success('Booking Confirmed',)
        setBookingCar(null)
        fetch('http://localhost:5000/orders',{
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.acknowledged){
                setBookingCar(null);
                toast.success('Booked',{autoClose:500})
            }
        })
        
    }

    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold mb-3">Model: {title}</h3>
                    <form onSubmit={handleBooking}>
                        <input type="text" value={date} placeholder="Type here" className="input input-bordered input-primary w-full" />
                        <input  type="text" placeholder="Type here" value={originalprice} className="input input-bordered input-primary mt-2 w-full" />
                        <input  type="text" placeholder="Type here" value={resaleprice} className="input input-bordered input-primary mt-2 w-full" />
                        <input type="text" placeholder="Type here" value={brand} className="input input-bordered input-primary mt-2 w-full" />
                        <input type="text" placeholder="Type here" value={location} className="input input-bordered input-primary mt-2 w-full" />
                        <input type="text" placeholder="Type here" value={condition} className="input input-bordered input-primary mt-2 w-full" />
                        <input type="text" placeholder="Type here" value={YearOfPurchase} className="input input-bordered input-primary mt-2 w-full" />
                        <input name='email' type="text" placeholder="email" defaultValue={user?.email} className="input input-bordered input-primary mt-2 w-full" readOnly />
                        <input name='name' type="text" placeholder="name" defaultValue={user?.displayName} className="input input-bordered input-primary mt-2 w-full" />
                        <input name='phone' type="text" placeholder="phone" className="input input-bordered input-primary mt-2 w-full" />
                        <textarea name='details' defaultValue={details} className="textarea" placeholder="details"></textarea>
                        <input className="btn btn-active btn-primary text-white w-full mt-2" type="submit" value='Book Now' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;