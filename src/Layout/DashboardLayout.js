import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import useAdmin from '../hooks/useAdmin';
import useSeller from '../hooks/useSeller';
import Navbar from '../Pages/Shared/Navber/Navbar';
import order from '../assets/icons/shopping-cart.png';
import AllUser from '../assets/icons/multiple-users-silhouette.png';
import Report from '../assets/icons/report.png';
import Addpr from '../assets/icons/add-to-cart.png';
import Mangpr from '../assets/icons/product-chain.png';



const DashboardLayout = () => {
    const {user} = useContext(AuthContext)
    const [isAdmin] = useAdmin(user?.email);
    const [isSeller] = useSeller(user?.email);
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    <Outlet></Outlet>

                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">

                        <div className='flex'>
                        <li><Link to='/dashboard'>My Orders</Link></li>
                        <img className='w-6 h-6 mt-4' src={order} alt="" />
                        </div>
                        {
                            isAdmin && <>
                            <div className='flex'>
                            <li><Link to='/dashboard/allusers'>All Users</Link></li>
                            <img className='w-6 h-6 mt-4' src={AllUser} alt="" />
                            </div>
                            <div className='flex'>
                            <li><Link to='/dashboard/report'>Reported Items</Link></li>
                            <img className='w-6 h-6 mt-4' src={Report} alt="" />
                            </div>
                            </>

                        }
                        {
                            isSeller && <>
                            <div className='flex'>
                            <li><Link to='/dashboard/addproducts'>Add products</Link></li>
                            <img className='w-6 h-6 mt-4' src={Addpr} alt="" />
                            </div>
                           <div className='flex'>
                           <li><Link to='/dashboard/manageproducts'>Manage Products</Link></li>
                           <img className='w-6 h-6 mt-4' src={Mangpr} alt="" />
                           </div>
                            </>
                        }
                        
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;