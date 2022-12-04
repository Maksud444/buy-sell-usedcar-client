import React, { useContext } from 'react';
import { FaCarAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import facebook from '../../../assets/facebook.png';
import insta from '../../../assets/instagram.png';
import github from '../../../assets/github (2).png';

import { AuthContext } from '../../../context/AuthProvider';


const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then(() => { toast.warning('LogOut Successfully', { autoClose: 500 }) })
            .catch(err => console.error(err))
    }


    const menuItems = <>
        <li className='font-bold text-white'><Link to='/'>Home</Link></li>
        <li className='font-bold text-white'><Link to='/blog'>Blog</Link></li>
       
        {user?.uid ?
            <>
                <li className='font-bold text-white'><Link to='/dashboard'>Dashboard</Link></li>
                <li className='font-bold text-white'><button onClick={handleLogOut}>Sign Out</button></li>
            </>
            :
            <li className='font-bold text-white'><Link to='/login'>Login</Link></li>
        }
        {user?.photoURL ?
            <img className=' w-12 h-12 rounded-full dark:bg-gray-500'
                src={user?.photoURL} alt=""></img>
            :
            <></>
        }
    </>

    return (

        <div>
            <div className="navbar flex justify-between bg-primary text-primary-content mt-4 rounded-lg">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 text-black shadow bg-primary rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost normal-case text-xl font-bold hover:text-3xl">Buy/Sell Car <FaCarAlt className='ml-2 text-3xl text-black'></FaCarAlt></Link>
                    <div className='flex gap-2'>
                        <img className='w-6 h-6' src={facebook} alt="" />
                        <img className='w-6 h-6' src={insta} alt="" />
                        <img className='w-6 h-6' src={github} alt="" />
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {menuItems}
                    </ul>
                </div>
              
            </div>
        </div>

    );
};

export default Navbar;