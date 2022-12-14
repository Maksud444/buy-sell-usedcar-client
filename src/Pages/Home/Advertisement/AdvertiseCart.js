import React from 'react';

const AdvertiseCart = ({ product }) => {
    const {image_url,resaleprice,title}=product
    return (
        <div>
                   <div key={product._id}  className="card card-compact w-96 mx-auto bg-base-100 shadow-xl mb-5 hover:w-11/12 cursor-pointer">
                    <figure>
                        <img className='w-full h-40' src={image_url} alt="phone" />
                    </figure>
                <div className="card-body">
                        <h2 className="card-title">Price:{resaleprice}</h2>
                        <p><span className='font-bold'>Car: </span>{ title}</p>
                        
                    </div>
                    
              </div>
         
        </div>
    );
};

export default AdvertiseCart;