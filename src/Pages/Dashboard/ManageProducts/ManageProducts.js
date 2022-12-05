import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../context/AuthProvider';
import Spinner from '../../Shared/Spinner/Spinner';


const ManageProducts = () => {
    // const [deleteProduct, setDeleteProduct] = useState(null)
    const {user} = useContext(AuthContext)

    const { data: products, isLoading, refetch } = useQuery({
    
        queryKey: ['doctors'],
        queryFn: async () => {
            try {
                const res = await fetch(`http://localhost:5000/myproduct?email=${user?.email}`, {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                const data = await res.json();
                return data;
            }
            catch (error) {

            }
        }
    })
console.log(products,"products mange");
    const handleDeleteProduct = product => {
        fetch(`http://localhost:5000/product/${product?._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch()
                    toast.success('DeleteConfirmed', { autoClose: 500 })
                }
            })
    }

    if (isLoading) {
        return <Spinner></Spinner>
    }
    
    const addProductInAdvertise = (id) => {
        console.log(id);
          fetch(`http://localhost:5000/advertise/${id}`, {
            method: 'PUT',
            headers: {
              'content-type':'application/json'
            }
          })
            .then(res => res.json())
            .then(data => {
              console.log(data,'the adertised prduct');
            toast.success('successfully added the product on advertise')
          })
        }

    return (
        <div>
            <h2 className="text-3xl">Manage Products {products?.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>advertise</th>
                            <th>Email</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products?.map((product, i) =>
                                <tr key={product._id}>
                                    <th>{i + 1}</th>
                                    <td><div className="avatar">
                                        <div className="w-16 rounded-full">
                                            <img src={product.image} alt='' />
                                        </div>
                                    </div></td>
                                    <td>{product.title}</td>
                                    <td>{product.brand}</td>
                                    <td><button onClick={()=>addProductInAdvertise(product._id)}  className="btn btn-info">advertise</button></td>
                                    <td>{product.email}</td>
                                    <td><button onClick={() => handleDeleteProduct(product)} className="btn btn-circle btn-outline">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                    </button></td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageProducts;