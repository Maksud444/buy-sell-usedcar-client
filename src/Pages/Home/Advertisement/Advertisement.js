import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';

import { AuthContext } from '../../../context/AuthProvider';
import Spinner from '../../Shared/Spinner/Spinner';
import AdvertiseCart from './AdvertiseCart';



const Advertisement = () => {
    const { user } = useContext(AuthContext);
    const { data: products = [] ,isLoading} = useQuery({
        queryKey: ["advertise"],
        queryFn: async () => {
          const res = await fetch(`http://localhost:5000/advertise?status=advertise`)
          const data = await res.json();
          return data;
        }
    });
        if (isLoading) {
      return <Spinner></Spinner>
    }
    console.log(products,'get this product')
    return (
        <>
            {
                products.length>0 && <>
                    <h4 className='text-5xl font-bold text-center mb-16'>Our latest Cars</h4>
                <div className="grid w-11/12 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mx-auto">
            {
                products.map(product => <AdvertiseCart
                    key={product._id}
                    product={product}
                ></AdvertiseCart>)
          }
                    </div>
                    </>
            }
            
        </>
    );
};

export default Advertisement;