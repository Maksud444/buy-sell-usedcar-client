import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';


const MyOrders = () => {
    const { user } = useContext(AuthContext)

    const url = `http://localhost:5000/orders?email=${user?.email}`

    const { data: orders = [] } = useQuery({
        queryKey: ['orders', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
            const data = await res.json();
            return data
        }
    })
    console.log(orders)
    return (
        <div>
            <h3 className="text3xl">All Options</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Title</th>
                            <th>Date</th>
                            <th>location</th>
                            <th>email</th>
                            <th>originalPrice</th>
                            <th>resalePrice</th>
                            <th>phone</th>
                            <th>condition</th>
                            <th>YearOfPurchase</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            orders?.map((order, i) =>
                                <tr>
                                    <th>{i + 1}</th>
                                    <td>{order.name}</td>
                                    <td>{order.title}</td>
                                    <td>{order.date}</td>
                                    <td>{order.location}</td>
                                    <td>{order.email}</td>
                                    <td>{order.originalprice}</td>
                                    <td>{order.resaleprice}</td>
                                    <td>{order.phone}</td>
                                    <td>{order.condition}</td>
                                    <td>{order.YearOfPurchase}</td>
                                    <td>
                                        {
                                            order.resaleprice && !order.paid && <Link to={`/dashboard/payment/${order._id}`}>
                                            <button 
                                            className='btn btn-primary btn-sm text-white'
                                            >Pay</button>
                                            </Link> 
                                        }
                                        {
                                            order.resaleprice && order.paid && <span className='text-green-300 text-bold'>Paid</span>
                                        }
                                    </td>
                                </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;