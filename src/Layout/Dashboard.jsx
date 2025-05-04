import React from 'react';
import { FaHome, FaShoppingCart, FaUser, FaUsers, FaWallet } from 'react-icons/fa';
import { RiMenu2Fill, RiUserStarFill } from "react-icons/ri";
import { GrContact, GrMenu, GrSchedule, GrSchedules } from "react-icons/gr";
import { ImSpoonKnife } from "react-icons/im";
import { NavLink, Outlet } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { FaShop } from 'react-icons/fa6';
import useAdmin from '../hooks/useAdmin';

const Dashboard = () => {
const [isAdmin, isAdminLoading] = useAdmin();
const { user } = useAuth()

if (isAdminLoading && user?.email) {
    return <div>Loading admin status...</div>;
}

   

    return (
        <div className='w-screen  flex'>
            <div className=' fixed h-screen px-4 flex-1/5 bg-amber-400'>
                <h1 className='text-center my-2 font-Poppins font-bold text-2xl  mt-4'>{user?.email ? <>Hello,{user?.displayName}</> : 'Dashboard'}</h1>
                <ul className='flex  flex-col   py-4 font-semibold text-xl'>
                    {
                       
                        isAdmin  ? <>
                        {/* Admin Menu */}
                            <li className=' flex justify-center items-center gap-x-2 hover:bg-amber-900 hover:text-white text-center border-y-2 py-4 '>
                                <FaHome></FaHome>
                                <NavLink to="/dashboard/adminhome">Admin Home </NavLink></li>
                            <li className=' text-center active:bg-blue-600 focus:bg-blue-400  py-4 flex justify-center items-center gap-x-2 hover:bg-amber-900 hover:text-white '>
                                <ImSpoonKnife></ImSpoonKnife>
                                <NavLink to="/dashboard/additems">Add Items</NavLink></li>
                            <li className=' flex justify-center active:bg-blue-600  items-center gap-x-2 hover:bg-amber-900 hover:text-white text-center border-y-2 py-4 '>
                                <RiMenu2Fill></RiMenu2Fill>
                                <NavLink to="/dashboard/manageitems">Manage Items</NavLink></li>
                            <li className=' flex justify-center items-center gap-x-2 hover:bg-amber-900 hover:text-white text-center  py-4 '>
                                <GrSchedules ></GrSchedules>
                                <NavLink to="/dashboard/bookings">Manage Bookings </NavLink></li>
                            <li className=' flex border-t-2 justify-center items-center gap-x-2 hover:bg-amber-900 hover:text-white text-center  py-4 '>
                                <FaUsers></FaUsers>
                                <NavLink to="/dashboard/users">All Users </NavLink></li>
                            
                        </> : <>
                        {/* users Menu */}
                            <li className=' flex justify-center items-center gap-x-2 hover:bg-amber-900 hover:text-white text-center border-y-2 py-4 '>
                                <FaHome></FaHome>
                                <NavLink to="/">User Home </NavLink></li>
                            <li className=' text-center active:bg-blue-600 focus:bg-blue-400  py-4 flex justify-center items-center gap-x-2 hover:bg-amber-900 hover:text-white '>
                                <FaShoppingCart></FaShoppingCart>
                                <NavLink to="/dashboard/cart">My Cart</NavLink></li>
                            <li className=' flex justify-center active:bg-blue-600  items-center gap-x-2 hover:bg-amber-900 hover:text-white text-center border-y-2 py-4 '>
                                <FaWallet></FaWallet>
                                <NavLink to="/">Payment History </NavLink></li>
                            <li className=' flex justify-center items-center gap-x-2 hover:bg-amber-900 hover:text-white text-center  py-4 '>
                                <GrSchedules ></GrSchedules>
                                <NavLink to="/">Reservation </NavLink></li>
                            <li className=' flex border-t-2 justify-center items-center gap-x-2 hover:bg-amber-900 hover:text-white text-center  py-4 '>
                                <RiUserStarFill></RiUserStarFill>
                                <NavLink to="/">Add Review </NavLink></li>
                            <li className=' flex justify-center items-center gap-x-2 hover:bg-amber-900 hover:text-white text-center border-y-2 py-4 '>
                                <GrSchedule></GrSchedule>
                                <NavLink to="/">My Booking </NavLink></li>
                        </>


                    }

                    <div className='divider mx-4 my-8'>Quick Link</div>

                    <li className=' flex justify-center items-center gap-x-2 hover:bg-amber-900 hover:text-white text-center border-y-2 py-4 '>
                        <FaHome></FaHome>
                        <NavLink to="/">Home</NavLink></li>
                    <li className=' flex justify-center items-center gap-x-2 hover:bg-amber-900 hover:text-white text-center  py-4 '>
                        <GrMenu></GrMenu>
                        <NavLink to="/menu">Menu</NavLink></li>
                    <li className=' flex justify-center items-center gap-x-2 hover:bg-amber-900 hover:text-white text-center border-y-2 py-4 '>
                        <FaShop></FaShop>
                        <NavLink to="/shop">Shop</NavLink></li>
                    <li className=' flex justify-center items-center gap-x-2 hover:bg-amber-900 hover:text-white text-center border-b-2 py-4 '>
                        <GrContact></GrContact>
                        <NavLink to="/contact">ContactUs</NavLink></li>
                </ul>
            </div>
            <div className='flex mx-auto px-8 pt-4  '>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;