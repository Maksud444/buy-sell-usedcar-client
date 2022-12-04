
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from './BookingModal/BookingModal';
import CarCard from './CarCard';


const Allcar = () => {
    const [bookingCar, setBookingCar] = useState([])
   const data= useLoaderData()
   console.log(data)
    return (
       <div>
         <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-9'>
        {
          data?.map(carCard => <CarCard
          key={carCard._id}
          carCard={carCard}
          setBookingCar={setBookingCar}
          ></CarCard>)
        }
   </div>
  { 
  bookingCar &&
  <BookingModal
  bookingCar={bookingCar}
  setBookingCar={setBookingCar}
  ></BookingModal>
  }
       </div>
    );
};

export default Allcar;