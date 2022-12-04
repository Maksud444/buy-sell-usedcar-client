import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import cover from '../../../assets/card img.jpeg'

const Categorys = () => {
    const [carData, setCarData] = useState([])
    console.log(carData)
    const categoryId = carData;
    useEffect(() =>{
        fetch(`http://localhost:5000/category`)
        .then(res => res.json())
        .then(data => {
    setCarData(data)
        })
    },[])
    return (
        <div className="card shadow-xl ">
            <p className='text-4xl text-center mt-4'>All Categories</p>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-4">
      {
        carData?.map(data => <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-4'> 
         
         <div className="card w-96">
  <figure className="px-10 pt-10">
    <img src={cover} alt="" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    
    <div className="card-actions">
    <button className='btn btn-primary text-white w-full'>
            <Link to={`car/${data?._id}`}>
            {data.name}
            </Link>
            </button>
    </div>
  </div>
</div>
             </div>)
       }
      </div>
    </div>
    );
};

export default Categorys;